import { authRepo } from "./auth.repository.mjs";


class AuthService {

    async adminLogin(dataLogin) {
        return await authRepo.adminLogin(dataLogin);
    }

}


export const authService = new AuthService();