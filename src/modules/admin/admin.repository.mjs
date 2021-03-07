import { Admin } from "./../../models/admin.model.mjs";

class AdminRepository {
  async getListAdmin(pagination) {
    const { currentPage, limit } = pagination;
    const skip = (currentPage - 1) * limit;

    const result = await Admin.findAndCountAll({
      limit,
      offset: skip,
    });

    return {
      current_page: +currentPage,
      limit: +limit,
      total_pages: Math.ceil(result.count / limit),
      total_admins: result.count,
      admins: result.rows.map((admin) => this.handleReponse(admin)),
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

  async show(condition) {
    return await Admin.findOne({ where: condition });
  }

  handleReponse(admin) {
    delete admin.dataValues.type_admin;
    delete admin.dataValues.password;
    delete admin.dataValues.createdAt;
    delete admin.dataValues.updatedAt;
    return admin.dataValues;
  }
}

export const adminRepo = new AdminRepository();
