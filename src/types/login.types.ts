import { UserType } from "./user.types";

export type LoginResponseType = {
  user: UserType;
  token: string;
};
