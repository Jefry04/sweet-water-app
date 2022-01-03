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
          <Link href="#">Formulario Registro</Link>
          <p>{"Username: " + user?.username}</p>
          <p>{"First Name: " + user?.firstName}</p>
          <p>{"Roles: "}</p>
          {user?.roles.map((rol) => (
            <li key={rol}>{rol}</li>
          ))}
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </>
  );
}

export default Home;
