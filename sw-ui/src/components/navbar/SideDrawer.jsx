import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { keyframes, styled } from "@stitches/react";
import logo from "../../public/logo.png";
import { ItemList } from "./ItemList";
import { UserContext } from "context/UserContext";

export const SideDrawer = () => {
  const { openDrawer, setOpenDrawer } = useContext(UserContext);
  const showOverlay = keyframes({
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  });

  const showContent = keyframes({
    "0%": { transform: "translateX(-100%)" },
    "100%": { transform: "translateX(0)" },
  });

  const Overlay = styled(Dialog.Overlay, {
    backgroundColor: "rgba(0,0,0, .55)",
    position: "fixed",
    zIndex: "$max",
    inset: 0,
    '&[data-state="open"]': {
      animation: `${showOverlay} 600ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
  });

  const Content = styled(Dialog.Content, {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: "$max",
    width: 300,
    background: "white",
    padding: "$1 $3",
    '&[data-state="open"]': {
      animation: `${showContent} 600ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
  });
  return (
    <Dialog.Root open={openDrawer} onOpenChange={setOpenDrawer}>
      <Overlay>
        <Content>
          <div className="sidedrawer-items">
            <div className="toolbar__logo">
              <Link href={"/forms"}>
                <a>
                  {" "}
                  <Image src={logo} width={200} height={150} alt="sweet water logo" />
                </a>
              </Link>
            </div>
            <ItemList />
          </div>
        </Content>
      </Overlay>
    </Dialog.Root>
  );
};
