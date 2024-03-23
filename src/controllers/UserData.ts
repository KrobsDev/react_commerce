import { UserModel } from "../models/UserModel";
import { UserService } from "../services/Users/UserService";
/**
 * Add user controller
 *
 * @export
 * @param {UserModel} params
 * @return {*}
 */
export async function createUserController(
  params: UserModel
): Promise<UserModel | unknown> {
  const response = await new UserService().createUserService(params);
  return response;
}
