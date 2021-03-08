import { authService } from "./auth.service.mjs";
import { Controller } from "./../../helper/controller.controller.mjs";

class AuthController extends Controller {
  constructor() {
    super();
    this.adminLogin = this.adminLogin.bind(this);
  }

  async adminLogin(req, res) {
    const result = await authService.adminLogin({
      username: req.body.username,
      password: req.body.password,
    });

    return this.handleResponse(result, res);
  }

  async userLogin() {}

  async driverLogin() {}

  async userSocialLogin() {}
}

export const authController = new AuthController();
