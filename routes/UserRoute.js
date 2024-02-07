import express from "express";

const UserRouter = express.Router();

UserRouter.get("/users", (req, res) => {
  res.status(200).send({
    data: [
      {
        id: 1,
        name: "user 1",
      },
      {
        id: 2,
        name: "user 2",
      },
    ],
  });
});

export default UserRouter;
