import React from "react";
import { styled } from "@stitches/react";
import * as Dialog from "@radix-ui/react-dialog";

const Overlay = styled(Dialog.Overlay, {
  background: "rgba(0, 0, 0, 0.55)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "grid",
  placeItems: "center",
  overflowY: "auto",
});

const Content = styled(Dialog.Content, {
  minWidth: 300,
  background: "white",
  padding: 30,
  borderRadius: 4,
  zIndex: 9999,
  position: "relative",
});

const CloseButton = styled(Dialog.Close, {
  fontSize: "1.1rem",
  appearance: "none",
  border: "0",
  padding: 0,
  background: "none",
  color: "black",
  position: "absolute",
  top: 20,
  right: 20,
  outline: "none",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.15)",
  },
});

const Title = styled(Dialog.Title, {
  textAlign: "center",
  marginBottom: "20px",
  variants: {
    color: {
      green: { color: "green" },
      black: { color: "black" },
    },
  },
  defaultVariants: {
    color: "black",
  },
});

const Description = styled(Dialog.Description, {
  marginBottom: "15px",
});

function InfoModal({ open, onOpenChange, title, description, isSuccess }) {
  return (
    <Dialog.Root open={open} modal={true} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Overlay>
          <Content>
            <Title color={isSuccess ? "green" : "black"}>{title}</Title>
            <Description>{description}</Description>
            <CloseButton>X</CloseButton>
          </Content>
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default InfoModal;
