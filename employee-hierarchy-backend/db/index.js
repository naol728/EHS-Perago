const { drizzle } = require("drizzle-orm/node-postgres");
const { Pool } = require("pg");
require("dotenv").config();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const db = drizzle({ client: pool });

async function testConnection() {
  try {
    console.log("🧲Database connected:");
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
}

testConnection();
module.exports = db;
