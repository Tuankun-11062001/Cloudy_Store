import PartnerAPI from "@/restAPI/partner";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// thunks

export const getPartnerAsync = createAsyncThunk(
  "partners/getPartners",
  async () => {
    const response = await PartnerAPI.getPartners();
    return response;
  }
);

const PartnerSlice = createSlice({
  name: "partner",
  initialState: {
    partners: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPartnerAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPartnerAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.partners = action.payload;
      })
      .addCase(getPartnerAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default PartnerSlice.reducer;
