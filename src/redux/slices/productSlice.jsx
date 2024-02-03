import ProductAPI from "@/restAPI/product";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// thunks

export const getProductsAsync = createAsyncThunk(
  "product/getProducts",
  async () => {
    const response = await ProductAPI.getProducts();
    return response;
  }
);

export const getOneProductAsync = createAsyncThunk(
  "product/getOneProduct",
  async (id) => {
    const response = await ProductAPI.getProductById(id);
    return response;
  }
);

const ProductSlice = createSlice({
  initialState: {
    products: [],
    filters: [],
    ViewProduct: {},
    filterKey: "all",
    loading: false,
    error: "",
  },
  name: "product",
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setFilterKey: (state, action) => {
      state.filterKey = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // get all product

      .addCase(getProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filters = action.payload;
      })
      .addCase(getProductsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // get one product

      .addCase(getOneProductAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneProductAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.ViewProduct = action.payload;
      })
      .addCase(getOneProductAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { getProducts, setFilters, setFilterKey } = ProductSlice.actions;
export default ProductSlice.reducer;
