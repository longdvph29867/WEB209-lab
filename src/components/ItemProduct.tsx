import { ProductType } from "../types/product";

type Props = {
  product: ProductType;
};

const ItemProduct = ({ product }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <img src={product.images[0]} alt="" />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold">
            {product.name.slice(0, 20) + "..."}
          </h4>
          <p>${product.price}</p>
        </div>
        <p>{product.desc.slice(0, 32) + "..."}</p>
      </div>
      <button className="w-full py-2 rounded border border-black">
        Add to cart
      </button>
    </div>
  );
};

export default ItemProduct;
