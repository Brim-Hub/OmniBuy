import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productDetails: {},
  loading: false,
  error: null
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductsStart: (state) => { state.loading = true; state.error = null; },
    fetchProductsSuccess: (state, action) => { state.loading = false; state.products = action.payload; },
    fetchProductsFailure: (state, action) => { state.loading = false; state.error = action.payload; },

    fetchProductDetailsStart: (state) => { state.loading = true; state.error = null; },
    fetchProductDetailsSuccess: (state, action) => { state.loading = false; state.productDetails = action.payload; },
    fetchProductDetailsFailure: (state, action) => { state.loading = false; state.error = action.payload; },

    searchProducts: (state, action) => {
      const query = action.payload.toLowerCase();
      state.products = state.products.filter(p => p.name.toLowerCase().includes(query));
    },

    filterProducts: (state, action) => {
      // example filter: { category: "shoes", priceRange: [0,100] }
      const { category, priceRange } = action.payload;
      state.products = state.products.filter(p => 
        (!category || p.category === category) &&
        (!priceRange || (p.price >= priceRange[0] && p.price <= priceRange[1]))
      );
    }
  }
});

export const {
  fetchProductsStart, fetchProductsSuccess, fetchProductsFailure,
  fetchProductDetailsStart, fetchProductDetailsSuccess, fetchProductDetailsFailure,
  searchProducts, filterProducts
} = productSlice.actions;

export default productSlice.reducer;
