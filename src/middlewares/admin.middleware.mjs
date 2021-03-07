import { AuthMiddleware } from "./auth.middleware.mjs";
import { adminRepo } from "./../modules/admin/admin.repository.mjs";

class AdminMiddleware extends AuthMiddleware {
  isAdmin() {}

  isRootAdmin() {}

  async isExistAdmin(condition) {
    return await adminRepo.show(condition);
  }
}

export const adminMiddleware = new AdminMiddleware();
