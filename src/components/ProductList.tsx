import React, { useContext } from "react";
import { ProductListData } from "../App";
import { DemoData } from "../types";
import axios from "axios";

type Props = {};

const ProductList = (props: Props) => {
  const [productList, setProductList] = useContext(ProductListData);

  const handleDelete = (id: string) => {
    axios
      .get("http://localhost:8000/products/" + id, { method: "DELETE" })
      .then((response) => {
        const newPorductList = productList.filter(
          (item: DemoData) => item.id !== id
        );
        setProductList(newPorductList);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
          <th scope="col">action</th>
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
            <td>
              <button type="button" className="btn btn-warning text-warning">
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDelete(item.id as string)}
                className="btn btn-danger text-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
