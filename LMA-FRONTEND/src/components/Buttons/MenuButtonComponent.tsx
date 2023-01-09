import React, { useState } from "react";
import {
  MenuButtonCloseIcon,
  MenuButtonOpenIcon,
} from "../../icons/MenuButtonIcon";
import { Button } from "./ButtonComponent";
import LogoArt from "../../icons/IconLogoBrand";
type Props = {
  styleButton: string;
  styleIcons: string;
  disable?: boolean;
  toggle: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function MenuButtonComponent({
  styleButton,
  styleIcons,
  onClick,
  toggle,
}: Props) {
  return (
    <div className={styleButton}>
      <Button styleButton="" styleText="" onClick={onClick}>
        {toggle ? (
          <div className={styleIcons}>
            <MenuButtonOpenIcon></MenuButtonOpenIcon>
            <LogoArt></LogoArt>
          </div>
        ) : (
          <div className={styleIcons}>
            <MenuButtonCloseIcon></MenuButtonCloseIcon>
            <LogoArt></LogoArt>
          </div>
        )}
      </Button>
    </div>
  );
}

export { MenuButtonComponent };
