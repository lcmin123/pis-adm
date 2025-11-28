const express = require("express");
const router = express.Router();

require("dotenv").config();

const { db } = require("../db/db.js");

const { users } = require("../db/schema");

router.get("/users", async (req, res) => {
  try {
    const rows = await db.select().from(users);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/users", async (req, res) => {
  try {
    const { name, birth } = req.body;
    const rows = await db
      .insert(users)
      .values({ name, birth }) // 컬럼은 여기서 매핑
      .returning();
    res.status(201).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
