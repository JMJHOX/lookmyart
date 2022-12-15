import React from "react";

type Props = {
  children: React.ReactNode;
  styleButton: string;
  styleText: string;
  disable?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({ children, styleButton, styleText, disable, onClick }: Props) {
  return (
    <button className={styleButton} disabled={disable} onClick={onClick}>
      <span className={styleText}>{children}</span>
    </button>
  );
}

export { Button };
