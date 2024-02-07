import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const db = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER_NAME,
  process.env.DATABASE_PASSWORD,
  {
    host: "sql6.freesqldatabase.com",
    dialect: "mysql",
  }
);

export default db;
// import { Sequelize } from "sequelize";

// const db = new Sequelize("sql6681491", "sql6681491", "HcnF6hsPAq", {
//   host: "sql6.freesqldatabase.com",
//   dialect: "mysql",
// });

// export default db;
