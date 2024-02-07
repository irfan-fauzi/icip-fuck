import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import UserRouter from "./routes/UserRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json())
app.get("/", (req, res) => {
  res.status(200).send({
    message: "🧮 🎟 🇦🇫 🧑 ✈ ",
  });
});

app.use(UserRouter);

app.listen(PORT, () => {
  console.log(`server SEDANG BERJALAN DI port: ${PORT}`);
});
