import React from "react";

type Props = {
  dark?: boolean;
  children: React.ReactNode;
};

const Button = ({ dark = false, children }: Props) => {
  return (
    <button
      className={`py-3 px-6 border border-black rounded ${
        dark && "bg-black text-white"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
