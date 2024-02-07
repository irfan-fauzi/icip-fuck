import express from "express";
import { getUserById, getUsers } from "../controller/UserController.js";

const UserRouter = express.Router();

UserRouter.get("/users", getUsers);
UserRouter.get("/user/:id", getUserById);

export default UserRouter;
