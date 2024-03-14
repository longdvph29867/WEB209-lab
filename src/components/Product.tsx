import { useEffect, useState } from "react";
import ItemProduct from "./ItemProduct";
import { ProductType } from "../types/product";
type Props = {};

const Product = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res: any) => {
        return res.json();
      })
      .then((res: any) => {
        // console.log(res);
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="bg-light">
      <div className="container py-5">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Featured Product</h1>
            <p>
              Reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>
        <div className="row">
          {products.map((item, i) => (
            <ItemProduct key={i} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
