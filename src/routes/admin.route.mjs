import express from "express";
import { adminController } from "./../modules/admin/admin.controller.mjs";
import { body, param } from "express-validator";

const router = express.Router();

router.get(
  "/admin/:currentPage/:limit",
  param("currentPage").isInt(),
  param("limit").isInt(),
  adminController.index
);

router.post(
  "/admin",
  body("username").not().isEmpty().trim().escape(),
  body("password").not().isEmpty().trim().escape(),
  body("phone").not().isEmpty().trim().escape(),
  body("address").not().isEmpty().trim().escape(),
  body("typeAdmin").isIn(["normal", "root"]),
  adminController.store
);

export default router;
