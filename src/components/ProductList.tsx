import React, { useContext } from "react";
import { ProductListData } from "../App";
import { DemoData } from "../types";

type Props = {};

const ProductList = (props: Props) => {
  const [productList, setProductList] = useContext(ProductListData);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">image</th>
          <th scope="col">desc</th>
          <th scope="col">price</th>
          <th scope="col">category</th>
        </tr>
      </thead>
      <tbody>
        {productList.map((item: DemoData) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.image}</td>
            <td>{item.desc}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
