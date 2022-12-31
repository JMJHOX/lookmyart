import React from "react";

type Props = {
  children?: React.ReactNode;
  styleCover: string;
  image: React.Component | string;
  styleText: string;
  textLabel: string;
  disable?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function ImageCard({
  image,
  styleCover,
  styleText,
  textLabel,
  disable,
  onClick,
}: Props) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className={styleCover}>
      <p className={styleText}>{textLabel}</p>
    </div>
  );
}

export { ImageCard };
