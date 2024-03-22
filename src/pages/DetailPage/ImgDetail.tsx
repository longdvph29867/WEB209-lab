import React from "react";

type Props = {};

const ImgDetail = (props: Props) => {
  return (
    <div className="flex gap-[30px]">
      <div className="flex flex-col gap-4">
        <div className="w-[170px] h-[138px] bg-[#F5F5F5] flex items-center justify-center">
          <img src="./img/product-left-1.png" alt="" />
        </div>
        <div className="w-[170px] h-[138px] bg-[#F5F5F5] flex items-center justify-center">
          <img src="./img/product-left-2.png" alt="" />
        </div>
        <div className="w-[170px] h-[138px] bg-[#F5F5F5] flex items-center justify-center">
          <img src="./img/product-left-3.png" alt="" />
        </div>
        <div className="w-[170px] h-[138px] bg-[#F5F5F5] flex items-center justify-center">
          <img src="./img/product-left-4.png" alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center w-[500px] bg-[#F5F5F5]">
        <img
          className="w-[446px] h-[315px]"
          src="./img/product-show.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default ImgDetail;
