import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LogoutButton } from "./LogoutButton";
import { routeList } from "./routeList";
import { DropdownList } from "./DropdownList";
import { useUser } from "hooks/useUser";
import { AppContext } from "context/AppContext";

export const ItemList = ({ isDrawer }) => {
  const { setOpenDrawer } = useContext(AppContext);
  const router = useRouter();
  const user = useUser();

  const handleClick = () => setOpenDrawer(false);

  const NavBarItemList = (
    <ul>
      {routeList.map((item, idx) => (
        <li key={idx} onClick={handleClick} className={router.pathname === item.href ? "active" : ""}>
          <Link href={item.href}>
            <a>{item.label}</a>
          </Link>
        </li>
      ))}
      {user?.isAdmin && <DropdownList />}
      <LogoutButton />
    </ul>
  );

  const SideDrawerItemList = (
    <>
      <ul>
        {routeList.map((item, idx) => {
          const Icon = item.icon;
          return (
            <li key={idx} onClick={handleClick} className={router.pathname === item.href ? "active" : ""}>
              <Link href={item.href} passHref>
                <div className="sidedrawer__link">
                  <Icon />
                  <a>{item.label}</a>
                </div>
              </Link>
            </li>
          );
        })}
        {user?.isAdmin && <DropdownList isDrawer={true} />}
      </ul>
      <div className="sidedrawer__bottom">
        <div className="separator" />
        <LogoutButton isDrawer={true} />
      </div>
    </>
  );

  return isDrawer ? SideDrawerItemList : NavBarItemList;
};
