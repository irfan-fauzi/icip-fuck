import express from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controller/UserController.js";

const UserRouter = express.Router();

UserRouter.get("/users", getUsers);
UserRouter.get("/user/:id", getUserById);
UserRouter.post("/users", createUser);
UserRouter.patch("/user/:id", updateUser);
UserRouter.delete("/user/:id", deleteUser);

export default UserRouter;
