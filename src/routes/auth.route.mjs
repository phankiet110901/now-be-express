import express from "express";
import { authController } from "./../modules/auth/auth.controller.mjs";

const router = express.Router();

router.post("/auth/admin", authController.adminLogin);

export default router;