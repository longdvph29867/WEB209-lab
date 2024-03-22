import { useContext, useEffect, useState } from "react";
import ImgDetail from "./ImgDetail";
import InfoDetail from "./InfoDetail";
import { ProductType } from "../../types/product";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductListData } from "../../Layouts/Layout";
import ItemProduct from "../../components/ItemProduct";

type Props = {};

const DetailPage = (props: Props) => {
  const { id } = useParams();
  const [productList] = useContext(ProductListData);
  const [product, setProduct] = useState<ProductType>({
    id: "",
    name: "",
    desc: "",
    images: [],
    price: 0,
    slug: "",
    id_category: {
      id: "",
      categoryName: "",
    },
    gender: "",
    rating: 0,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`http://localhost:8000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="container mx-auto my-20">
      <div className="px-14">
        <div className="text-sm flex gap-3">
          <span className="opacity-50">Account</span>
          <span>/</span>
          <span className="opacity-50">Nothing</span>
          <span>/</span>
          <span>Havic HV G-92 Gamepad</span>
        </div>
        <div className="flex gap-[70px] mt-20">
          <ImgDetail product={product} />
          <InfoDetail product={product} />
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-5xl font-bold">Other Products</h1>
        <div className="grid grid-cols-4 gap-8 mt-6">
          {productList
            .filter(
              (item: ProductType) =>
                product.gender === item.gender && product.id !== item.id
            )
            .map((item: ProductType) => (
              <ItemProduct key={item.id} product={item} />
            ))
            .slice(0, 4)}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
