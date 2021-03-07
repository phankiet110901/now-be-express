import express from "express";
import { adminController } from "./../modules/admin/admin.controller.mjs";
import { body, param } from "express-validator";
import { adminMiddleware } from "./../middlewares/admin.middleware.mjs";

const router = express.Router();

// apply middleware for all route admin
// router.use("/admin", function (req, res) {
//   res.status(403).json({ message: "Access denied" });
// });

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
  async function isExistAdmin(req, res, next) {
    const foundAdmin = await adminMiddleware.isExistAdmin({
      username: req.body.username,
    });
    if (foundAdmin) {
      return res.status(400).json({ message: "Admin have already exist !!!" });
    } else {
      next();
    }
  },
  adminController.store
);

export default router;
