import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const values = {
    openDrawer,
    setOpenDrawer,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
