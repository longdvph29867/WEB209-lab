import { useContext } from "react";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";
import ProductListHeader from "../components/ProductListHeader";
import PromotionBanner from "../components/PromotionBanner";
import { ProductListData } from "../Layouts/Layout";
import { ProductType } from "../types/product";

type Props = {};

const HomePage = (props: Props) => {
  const [productList] = useContext(ProductListData);
  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <ProductListHeader
          title="Featured Products"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ProductList
          productList={productList
            .filter((item: ProductType) => item.gender === "female")
            .slice(0, 8)}
        />
      </div>
      <PromotionBanner />
      <div className="container mx-auto">
        <ProductListHeader
          title="Popular Products"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ProductList productList={productList} />
      </div>
    </div>
  );
};

export default HomePage;
