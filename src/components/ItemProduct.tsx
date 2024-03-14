import React from "react";
import { ProductType } from "../types/product";

type Props = {
  product: ProductType;
};

const ItemProduct = ({ product }: Props) => {
  return (
    <div className="col-12 col-md-4 mb-4">
      <div className="card h-100">
        <a href="shop-single.html">
          <img src={product.image} className="card-img-top" alt="..." />
        </a>
        <div className="card-body">
          <ul className="list-unstyled d-flex justify-content-between">
            <li>
              <i className="text-warning fa fa-star"></i>
              <i className="text-warning fa fa-star"></i>
              <i className="text-warning fa fa-star"></i>
              <i className="text-muted fa fa-star"></i>
              <i className="text-muted fa fa-star"></i>
            </li>
            <li className="text-muted text-right">{product.price}</li>
          </ul>
          <a
            href="shop-single.html"
            className="h2 text-decoration-none text-dark"
          >
            {product.name}
          </a>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in
            culpa qui officia deserunt.
          </p>
          <p className="text-muted">Reviews (24)</p>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
