import { adminRepo } from "./admin.repository.mjs";

class AdminService {
  async getListUser(pagination) {
    return await adminRepo.getListUser(pagination);
  }

  async createAdmin(admin) {
    return await adminRepo.createAdmin(admin);
  }
}

export const adminService = new AdminService();
