import React from "react";
import { useUser } from "../hooks/useUser";

function Home() {
  const user = useUser({ redirectTo: "/login" });

  return (
    <>
      {user && (
        <main style={{ marginTop: "64px" }}>
          <h2>Usuario:</h2>
          <p>{"Username: " + user?.username}</p>
          <p>{"First Name: " + user?.firstName}</p>
          <p>{"Roles: "}</p>
          {user?.roles.map((rol) => (
            <li key={rol}>{rol}</li>
          ))}
        </main>
      )}
    </>
  );
}

export default Home;
