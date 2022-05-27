import React from "react";

type Prop = {
  name: string;
  disable?: boolean;
  onClick?: () => void;
};

const Button: React.FC<Prop> = ({ name, disable, onClick }) => {
  return (
    <button
      disabled={disable ? disable : false}
      onClick={onClick}
      className="w-full py-2 px-4 bg-[#2BD9AF] hover:bg-[#27c39e]  rounded-3xl text-white font-bold disabled:bg-slate-400"
    >
      {name && name}
    </button>
  );
};

export default React.memo(Button);
