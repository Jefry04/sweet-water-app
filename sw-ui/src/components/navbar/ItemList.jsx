import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LogoutButton } from "./LogoutButton";
import { UserContext } from "context/UserContext";

const listItem = [
  {
    href: "/forms",
    label: "formularios",
  },
  {
    href: "/admin/signup",
    label: "Crear usuario",
  },
  {
    href: "/datasheet",
    label: "Datasheet",
  },
];

export const ItemList = () => {
  const { setOpenDrawer } = useContext(UserContext);
  const router = useRouter();

  const handleClick = () => setOpenDrawer(false);
  return (
    <ul>
      {listItem.map((item, idx) => (
        <li key={idx} onClick={handleClick} className={router.pathname === item.href ? "active" : ""}>
          <Link href={item.href}>
            <a>{item.label}</a>
          </Link>
        </li>
      ))}
      <LogoutButton />
    </ul>
  );
};
