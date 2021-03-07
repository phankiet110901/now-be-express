import { adminRepo } from "./admin.repository.mjs";

class AdminService {
  async getListAdmin(pagination) {
    return await adminRepo.getListAdmin(pagination);
  }

  async createAdmin(admin) {
    return await adminRepo.createAdmin(admin);
  }
}

export const adminService = new AdminService();
