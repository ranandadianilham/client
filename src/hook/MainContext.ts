import { createContext } from "react";
import { Role } from "../enum/role.enum";

export default createContext({
    userRole: Role.CUSTOMER,
    isLoading: false,
    error: null,
  });