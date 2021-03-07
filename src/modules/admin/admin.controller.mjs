import { adminService } from "./admin.service.mjs";
import { CreateAdminDto } from "./dto/create-admin.dto.mjs";
import { validationResult } from "express-validator";

class AdminController {
  async index(req, res) {
    const errs = validationResult(req);
    if (!errs.isEmpty()) {
      return res.status(400).json({ errors: errs.array() });
    }

    return res
      .status(200)
      .json({
        all_admins: await adminService.getListUser({
          currentPage: req.params.currentPage,
          limit: req.params.limit,
        }),
      });
  }

  async store(req, res) {
    const errs = validationResult(req);
    if (!errs.isEmpty()) {
      return res.status(500).json({
        errors: errs.array(),
      });
    }
    const newAdmin = new CreateAdminDto(
      req.body.username,
      req.body.password,
      req.body.phone,
      req.body.address,
      req.body.typeAdmin
    );

    const resCreate = await adminService.createAdmin(newAdmin);
    if (resCreate) {
      return res.status(201).json(resCreate);
    }
    return res.status(500).json({ message: "Error" });
  }
}

export const adminController = new AdminController();
