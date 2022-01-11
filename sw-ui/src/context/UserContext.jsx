import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const values = {
    user,
    setUser,
    openDrawer,
    setOpenDrawer,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
