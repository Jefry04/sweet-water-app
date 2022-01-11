import React from "react";
import { useUser } from "../hooks/useUser";
import Logo from "public/Logo";

function Home() {
  const user = useUser({ redirectTo: "/login" });

  return (
    <>
      {user && (
        <div className="mainPage">
          <Logo />
          <h2>Usuario:</h2>
          <p>{"Username: " + user?.username}</p>
          <p>{"First Name: " + user?.firstName}</p>
          <p>{"Roles: "}</p>
          {user?.roles.map((rol) => (
            <li key={rol}>{rol}</li>
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
