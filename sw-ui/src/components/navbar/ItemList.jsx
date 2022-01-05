import React, { useContext } from "react";
import Link from "next/link";
import { LogoutButton } from "./LogoutButton";
import { UserContext } from "context/UserContext";

const listItem = [
  {
    href: "/forms",
    label: "formulario",
  },
  {
    href: "/admin",
    label: "Admin",
  },
  {
    href: "/datasheet",
    label: "Datasheet",
  },
];

export const ItemList = () => {
  const { setOpenDrawer } = useContext(UserContext);

  const handleClick = () => setOpenDrawer(false);
  return (
    <ul>
      {listItem.map((item, idx) => (
        <li key={idx} onClick={handleClick}>
          <Link href={item.href}>
            <a>{item.label}</a>
          </Link>
        </li>
      ))}
      <LogoutButton />
    </ul>
  );
};
