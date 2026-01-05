import { and, eq, isNull } from 'drizzle-orm';
import { db } from '../db/db.mjs';
import { users } from '../db/schema.mjs';

class UserService {
  async getAllUsers() {
    return await db.select().from(users);
  }

  async createUser(data) {
    return await db.insert(users).values(data).returning();
  }

  async getUserById(id) {
    const rows = await db.select().from(users).where(eq(users.id, id));
    return rows[0];
  }

  async updateAthNo(id, ath_no) {
    try {
      // 1. Fetch user to validate format (still needed for business rule 'birth-id')
      // NOTE: We could do this in SQL but getting the user first gives better error messages (404 vs 400)
      // Since optimization was about "duplicate check" and "update condition", we keep this one select for safety/validation.
      // If extreme optimization is needed, we can move this to SQL concatenation check.
      // Let's stick to the user request: "remove duplicate check select & add ath_no is null to update"

      const user = await this.getUserById(id);
      if (!user) {
        throw { status: 404, message: 'User not found' };
      }

      // Check format
      const expectedAthNo = `${user.birth}-${user.id}`;
      if (ath_no !== expectedAthNo) {
        throw { status: 400, message: 'Invalid athletic number format. Must be {birth}-{id}' };
      }

      // 2. Optimistic Update
      const updatedRows = await db
        .update(users)
        .set({ ath_no: ath_no })
        .where(
          and(
            eq(users.id, id),
            isNull(users.ath_no), // Only if not set
          ),
        )
        .returning();

      if (updatedRows.length === 0) {
        // Since we checked user existence, this means ath_no was already set
        throw { status: 400, message: 'Athletic number already exists for this user' };
      }

      return updatedRows[0];
    } catch (error) {
      // Catch Unique Constraint Violation
      if (
        error.code === 'SQLITE_CONSTRAINT_UNIQUE' ||
        (error.message && error.message.includes('UNIQUE constraint failed'))
      ) {
        throw { status: 409, message: 'This athletic number is already assigned to another user' };
      }
      throw error;
    }
  }
}

export default new UserService();
