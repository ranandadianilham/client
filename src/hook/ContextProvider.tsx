import React, { ReactNode, useEffect, useState } from "react";
import MainContext from "./MainContext";
import { Role } from "../enum/role.enum";



const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [userRole, setUserRole] = useState<Role>(Role.CUSTOMER); // default as Customer
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
    const getProfile = () => {
        // set user type
        setUserRole(Role.CUSTOMER)
    }

    useEffect(() => {
        // fetch profile info here
        getProfile()
    }, [])

  return (
    <MainContext.Provider
      value={{ userRole, isLoading, error}}
    >
      {children}
    </MainContext.Provider>
  );
};

export default ContextProvider;
