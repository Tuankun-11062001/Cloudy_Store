import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import partnerSlice from "./slices/partnerSlice";
import postSlice from "./slices/postSlice";
import ProductSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    product: ProductSlice,
    category: categorySlice,
    partner: partnerSlice,
    post: postSlice,
  },
});
export default store;
