import React, { useContext } from "react";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { SideDrawer } from "./SideDrawer";
import { ItemList } from "./ItemList";
import Logo from "public/Logo";
import { AppContext } from "context/AppContext";

export default function Navbar() {
  const { setOpenDrawer } = useContext(AppContext);

  const handleClick = () => {
    setOpenDrawer(true);
  };

  return (
    <>
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__toggle-button" onClick={handleClick}>
            <HamburgerMenuIcon width="28" height="28" color="#545454" />
          </div>
          <SideDrawer />
          <div className="toolbar__logo">
            <Link href={"/"}>
              <a>
                <Logo color="#fff" width="117" height="28" />
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
}
