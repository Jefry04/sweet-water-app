import React from "react";
import { useRouter } from "next/router";
import { ExitIcon } from "@radix-ui/react-icons";
import { logout } from "lib/services/auth";

export const LogoutButton = ({ isDrawer }) => {
  const router = useRouter();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    router.push("/login");
  };

  return isDrawer ? (
    <div className="sidedrawer__logout" onClick={handleLogout}>
      <ExitIcon />
      <a className="logout-button">Cerrar Sesión</a>
    </div>
  ) : (
    <button onClick={handleLogout} className="logout-button">
      Salir
    </button>
  );
};
