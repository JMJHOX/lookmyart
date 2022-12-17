import React from "react";
import MenuButtonIcon from "../icons/MenuButtonIcon";

type Props = {
  styleButton: string;
  styleText?: string;
  disable?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function MenuButton({ styleButton }: Props) {
  return (
    <div className={styleButton}>
      <MenuButtonIcon></MenuButtonIcon>
    </div>
  );
}

export { MenuButton };
