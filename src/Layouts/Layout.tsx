import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { ProductType } from "../types/product";
import ModelLogin from "../components/ModelLogin";
export const ProductListData = createContext([] as any);
export const ModelLoginContext = createContext({} as any);
type Props = {};
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "login":
      return <ModelLogin />;
    default:
      return <></>;
  }
};
const Layout = (props: Props) => {
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [modelLogin, setModelLogin] = useReducer(reducer, <></>);
  const title = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/products",
      name: "Products",
    },
    {
      link: "/aboutus",
      name: "About Us",
    },
    {
      link: "/contact",
      name: "Contact",
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ModelLoginContext.Provider value={{ modelLogin, setModelLogin }}>
      <ProductListData.Provider value={[productList, setProductList]}>
        <div className="flex flex-col min-h-screen">
          <Header title={title} />
          <div className="flex-grow">
            <Outlet />
          </div>
          <Footer />
        </div>
      </ProductListData.Provider>
    </ModelLoginContext.Provider>
  );
};

export default Layout;
