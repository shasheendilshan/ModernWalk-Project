import React from "react";
import style from "./Button.module.scss";

type variants = "outlined" | "primary";

type Prop = {
  name: string;
  disable?: boolean;
  onClick?: () => void;
  variant?: variants;
};

const Button: React.FC<Prop> = ({ name, disable, onClick, variant }) => {
  return (
    <button
      disabled={disable ? disable : false}
      onClick={onClick}
      className={variant ? style[variant] : style["primary"]}
    >
      {name && name}
    </button>
  );
};

export default React.memo(Button);
