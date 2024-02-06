import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.status(200).send({
    data: [
      {
        id: 1,
        name: "irfan",
      },
      {
        id: 2,
        name: "jaka",
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`server SEDANG BERJALAN DI port: ${PORT}`);
});
