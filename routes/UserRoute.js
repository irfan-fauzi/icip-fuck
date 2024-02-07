import express from "express";
import { getUsers } from "../controller/UserController.js";

const UserRouter = express.Router();

UserRouter.get("/users", getUsers);

export default UserRouter;
