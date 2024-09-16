import express from "express";
import { Sign, login } from "../Controller/useController.js";

const Router = express.Router();

Router.post('/login', login);
Router.post('/sign', Sign);

export default Router;




