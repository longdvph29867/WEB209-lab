import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

type Props = {};

const Layout = (props: Props) => {
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

  return (
    <div className="flex flex-col min-h-screen">
      <Header title={title} />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
