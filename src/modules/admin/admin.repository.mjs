import { Admin } from "./../../models/admin.model.mjs";

class AdminRepository {
  async getListUser(pagination) {
    const { currentPage, limit } = pagination;
    const skip = (currentPage - 1) * limit;

    const allAdmin = await Admin.findAndCountAll({
      limit,
      offset: skip,
    });

    return {
      currentPage,
      limit,
      totalPage: Math.ceil(allAdmin.count / limit),
      totalAdmins: allAdmin.count,
      admins: allAdmin.rows.map((admin) => this.handleReponse(admin)),
    };
  }
  async createAdmin(admin) {
    let newAdmin = {};

    try {
      newAdmin = await Admin.create(admin);
    } catch {
      newAdmin = null;
    }
    return newAdmin ? this.handleReponse(newAdmin) : null;
  }

  handleReponse(admin) {
    delete admin.dataValues.type_admin;
    delete admin.dataValues.password;
    return admin.dataValues;
  }
}

export const adminRepo = new AdminRepository();
