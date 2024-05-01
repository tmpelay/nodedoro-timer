import { Router } from "express";

import {
  indexController,
  createPomodoro,
} from "../controllers/index.controller.js";

const router = Router();

router.get("/", indexController);

router.post("/create-pomodoro", createPomodoro);

export default router;
