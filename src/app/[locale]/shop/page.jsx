import { ShopAllProduct } from "@/components/box/shop/allProduct/shopAllProduct";
import ShopCategory from "@/components/box/shop/category/shopCategory";
import { ShopMyDesign } from "@/components/box/shop/myDesign/shopMyDesign";
import { ShopPartner } from "@/components/box/shop/partner/shopPartner";
import { ShopSearch } from "@/components/box/shop/search/shopSearch";
import { ShopSeason } from "@/components/box/shop/season/shopSeason";
import { ShopSlider } from "@/components/box/shop/slider/shopSlider";

export const metadata = {
  title: "Store - Cloudy Melody",
  description:
    "🏬 Store: Ở đây, bạn sẽ tìm thấy những sản phẩm độc đáo mà tôi thiết kế, từ áo thun đến các món quà ý nghĩa. Tôi hy vọng rằng những sản phẩm này sẽ mang lại cho bạn niềm vui và phong cách riêng.",
};

const ShopPage = () => {
  return (
    <div className="shop_page">
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
