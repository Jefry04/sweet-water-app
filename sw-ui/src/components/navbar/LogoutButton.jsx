import React from "react";
import { useRouter } from "next/router";
import { logout } from "lib/services/auth";

export const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    router.push("/login");
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};
