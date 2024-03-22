import React from "react";
import Button from "./Button";

type Props = {
  title: string;
  desc: string;
};

const ProductListHeader = ({ title, desc }: Props) => {
  return (
    <div className="flex items-end justify-between">
      <div>
        <h2 className="text-5xl font-bold">{title}</h2>
        <p className="text-lg my-4">{desc}</p>
      </div>
      <div>
        <Button>View all</Button>
      </div>
    </div>
  );
};

export default ProductListHeader;
