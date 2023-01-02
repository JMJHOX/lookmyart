import React, { useState } from "react";
import MenuButtonIcon from "../../icons/MenuButtonIcon";
import { Button } from "./ButtonComponent";

type Props = {
  styleButton: string;
  styleText?: string;
  disable?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function MenuButtonComponent({ styleButton, onClick }: Props) {
  return (
    <div className={styleButton}>
      <Button styleButton="" styleText="" onClick={onClick}>
        <MenuButtonIcon></MenuButtonIcon>
      </Button>
    </div>
  );
}

export { MenuButtonComponent };
