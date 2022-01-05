import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import logo from "../../public/logo.png";
import { SideDrawer } from "./SideDrawer";
import { ItemList } from "./ItemList";
import { UserContext } from "context/UserContext";

export const Navbar = () => {
  const { setOpenDrawer } = useContext(UserContext);

  const handleClick = () => {
    setOpenDrawer(true);
  };

  return (
    <>
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__toggle-button" onClick={handleClick}>
            <HamburgerMenuIcon />
          </div>
          <SideDrawer />
          <div className="toolbar__logo">
            <Link href={"/forms"}>
              <a>
                {" "}
                <Image src={logo} width={80} height={100} alt="sweet water logo" />
              </a>
            </Link>
          </div>
          <div className="spacer" />
          <div className="toolbar_navigation-items">
            <ItemList />
          </div>
        </nav>
      </header>
    </>
  );
};
