import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import ProductList from "../components/ProductList";
import ProductListHeader from "../components/ProductListHeader";
import { ProductType } from "../types/product";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

type Props = {};

const ProductListPage = (props: Props) => {
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [urlParams] = useSearchParams();
  const currentPage = Number(urlParams.get("page") || 1);
  const limit = 8;
  useEffect(() => {
    axios
      .get(`http://localhost:8000/products?_page=${currentPage}`, {
        params: {
          _page: 1,
          _limit: limit,
        },
      })
      .then((res) => {
        setTotalPage(Math.ceil(res.headers["x-total-count"] / limit));
        setProductList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);
  return (
    <div className="mt-28">
      <div className="container mx-auto">
        <ProductListHeader
          title="Featured Products"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ProductList productList={productList} />
      </div>
      <div className="flex justify-center mt-16">
        <Pagination totalPage={totalPage} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default ProductListPage;
