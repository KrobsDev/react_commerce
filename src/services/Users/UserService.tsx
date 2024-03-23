import { handleErrors } from "@/utils/error_handler";
import api from "../../api";
import { UserModel } from "../../models/UserModel";
import { AxiosError } from "axios";

export class UserService {
  async createUserService(params: UserModel): Promise<UserModel | unknown> {
    try {
      const response = await api.post("/customer", params);
      return new UserModel(response.data);
    } catch (error) {
      return handleErrors(error as AxiosError);
    }
  }
}
