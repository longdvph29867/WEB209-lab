import { ProductType } from "../types/product";
import ItemProduct from "./ItemProduct";

type Props = {
  productList: ProductType[];
};

const ProductList = ({ productList }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-8 mt-8">
      {productList.map((item) => (
        <ItemProduct key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
