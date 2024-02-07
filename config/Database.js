import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const db = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER_NAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOSTING,
    dialect: "mysql",
  }
);

export default db;

