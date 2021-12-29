import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "../hooks/useUser";
import { logout } from "../lib/auth";

function Home() {
  const user = useUser({ redirectTo: "/login" });
  const router = useRouter();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    router.push("/login");
  };

  return (
    <>
      {user && (
        <>
          <h2>FORMULARIOS MANTENIMIENTO</h2>
          <Link href="/forms">Formulario 1</Link>
          <h3>{user?.username}</h3>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </>
  );
}

export default Home;
