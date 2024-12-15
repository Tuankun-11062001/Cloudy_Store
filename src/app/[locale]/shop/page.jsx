import { ShopAllProduct } from "@/components/box/shop/allProduct/shopAllProduct";
import ShopCategory from "@/components/box/shop/category/shopCategory";
import { ShopMyDesign } from "@/components/box/shop/myDesign/shopMyDesign";
import { ShopPartner } from "@/components/box/shop/partner/shopPartner";
import { ShopSearch } from "@/components/box/shop/search/shopSearch";
import { ShopSeason } from "@/components/box/shop/season/shopSeason";
import { ShopSlider } from "@/components/box/shop/slider/shopSlider";

export const metadata = {
  title: "Store ",
  description:
    "🏬 Store: Here, you will find unique products that I have designed, from t-shirts to meaningful gifts. I hope these products bring you joy and a sense of personal style.",
};

const ShopPage = () => {
  return (
    <div className="shop_page">
      <h1>Shop</h1>
      <ShopSlider />
      <ShopSearch />
      <ShopSeason />
      <ShopCategory />
      <ShopMyDesign />
      <ShopPartner />
      <ShopAllProduct />
    </div>
  );
};

export default ShopPage;
