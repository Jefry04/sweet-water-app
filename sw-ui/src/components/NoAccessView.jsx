import Link from "next/link";
import React from "react";

export const NoAccessView = () => {
  return (
    <div className="mainPage">
      <h2>No tiene permiso para ver esta pagina</h2>
      <Link href={"/"}>
        <a>
          <button className="button primary">HOME</button>
        </a>
      </Link>
    </div>
  );
};
