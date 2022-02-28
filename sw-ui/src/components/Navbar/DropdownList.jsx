import React, { useContext } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Collapsible from "@radix-ui/react-collapsible";
import Link from "next/link";
import { adminList } from "./routeList";
import { UserContext } from "context/UserContext";

export const DropdownList = ({ isDrawer }) => {
  const { setOpenDrawer } = useContext(UserContext);

  const handleClick = () => setOpenDrawer(false);

  const NavbarDropdownList = (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="dropdown_trigger">Admin</DropdownMenu.Trigger>
      <DropdownMenu.Content className="dropdown_content">
        {adminList.map((item, idx) => (
          <DropdownMenu.Item key={idx} className="dropdown_items">
            <Link href={item.href}>
              <a ref={item.href}>{item.label} </a>
            </Link>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );

  const SideDrawerList = (
    <Collapsible.Root>
      <Collapsible.Trigger className="sidedrawer__link">Admin</Collapsible.Trigger>
      <Collapsible.Content>
        {adminList.map((item, idx) => {
          const Icon = item.icon;
          return (
            <li key={idx} onClick={handleClick}>
              <Link href={item.href} passHref>
                <div className="sidedrawer__link">
                  <Icon />
                  <a>{item.label} </a>
                </div>
              </Link>
            </li>
          );
        })}
      </Collapsible.Content>
    </Collapsible.Root>
  );

  return isDrawer ? SideDrawerList : NavbarDropdownList;
};
