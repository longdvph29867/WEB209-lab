import { useState, useEffect } from "react";
import { ProductType } from "../../types/product";

type Props = {
  product: ProductType;
};

const ImgDetail = ({ product }: Props) => {
  const [isImage, setisImage] = useState<string>("");

  const handleClickImage = (image: string) => {
    setisImage(image);
  };

  useEffect(() => {
    setisImage(product.images[0]);
  }, [product]);

  return (
    <div className="flex gap-[30px]">
      <div className="flex flex-col gap-4">
        {product.images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleClickImage(image)}
            className={`w-[170px] h-[138px] bg-[#F5F5F5] flex items-center justify-center overflow-hidden border-4 ${
              isImage === image ? "border-gray-400" : "border-transparent"
            }`}
          >
            <img src={image} alt="" />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center w-[500px] bg-[#F5F5F5]">
        <img src={isImage} alt="" />
      </div>
    </div>
  );
};

export default ImgDetail;
