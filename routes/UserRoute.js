import express from "express";
import {
  createUser,
  getUserById,
  getUsers,
} from "../controller/UserController.js";

const UserRouter = express.Router();

UserRouter.get("/users", getUsers);
UserRouter.get("/user/:id", getUserById);
UserRouter.post("/users", createUser);

export default UserRouter;
