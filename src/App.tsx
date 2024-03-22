import { createContext, useEffect, useReducer, useState } from "react";
import "./App.css";
import { DemoData } from "./types";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import axios from "axios";
export const ProductListData = createContext([] as any);
function App() {
  const [productList, setProductList] = useState<DemoData[]>([]);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  useEffect(() => {
    console.log(123);

    axios
      .get("http://localhost:8000/products")
      .then((response) => {
        setProductList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <ProductListData.Provider value={[productList, setProductList]}>
        <div className="flex flex-col min-h-screen container mt-5 relative">
          <button
            onClick={() => setShow(true)}
            className="btn btn-success mb-3"
          >
            Add product
          </button>
          <ProductList />
        </div>
        {show && <AddProduct handleClose={handleClose} />}
      </ProductListData.Provider>
    </>
  );
}

export default App;
