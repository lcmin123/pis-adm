const userService = require('../services/user.service');
const { createUserSchema, updateAthNoSchema } = require('../validations/user.validation');

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async createUser(req, res) {
    try {
      // Yup Validation
      const validatedData = await createUserSchema.validate(req.body);

      const users = await userService.createUser(validatedData);
      res.status(201).json(users);
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
      }
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await userService.getUserById(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async updateUserAthNo(req, res) {
    try {
      const { id, ath_no } = req.params;

      // Yup Validation
      const validatedData = await updateAthNoSchema.validate({ ath_no });

      const updatedUser = await userService.updateAthNo(id, validatedData.ath_no);
      res.json(updatedUser);
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
      }
      console.error(error);
      if (error.status) {
        return res.status(error.status).json({ error: error.message });
      }
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = new UserController();
