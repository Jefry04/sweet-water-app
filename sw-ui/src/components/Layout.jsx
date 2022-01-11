import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__main">{children}</main>
    </div>
  );
}
