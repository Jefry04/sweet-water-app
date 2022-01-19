import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LogoutButton } from "./LogoutButton";
import { routeList } from "./routeList";
import { UserContext } from "context/UserContext";

export const ItemList = ({ isDrawer }) => {
  const { setOpenDrawer } = useContext(UserContext);
  const router = useRouter();

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
      </ul>
      <div className="sidedrawer__bottom">
        <div className="separator" />
        <LogoutButton isDrawer={true} />
      </div>
    </>
  );

  return isDrawer ? SideDrawerItemList : NavBarItemList;
};
