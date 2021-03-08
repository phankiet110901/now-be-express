import jwt from "jsonwebtoken";
import { Admin } from "./../../models/admin.model.mjs";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();
class AuthRepository {
  async adminLogin(dataLogin) {
    let foundAdmin = {};

    try {
      foundAdmin = await Admin.findOne({
        where: { username: dataLogin.username },
      });
    } catch {
      return {
        code: 500,
        message: "Database Error",
      };
    }

    if (!foundAdmin) {
      return {
        message: "Username is not correct",
      };
    }

    const checkPassword = await bcrypt.compare(
      dataLogin.password,
      foundAdmin.password
    );

    if (!checkPassword) {
      return {
        message: "Password is not correct",
      };
    }
    return this.handleReposne(foundAdmin.dataValues, {
      id: foundAdmin.dataValues.id_admin,
    });
  }

  driverLogin(dataLogin) {}

  storeLogin(dataLogin) {}

  customerLogin(dataLogin) {}

  handleReposne(responseLogin, payload) {
    delete responseLogin.password;
    delete responseLogin.createdAt;
    delete responseLogin.updatedAt;
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    // debugger;
    return {
      ...responseLogin,
      accessToken: token,
    };
  }
}

export const authRepo = new AuthRepository();
