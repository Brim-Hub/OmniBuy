import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentOrder: null,
  orders: [],
  loading: false,
  error: null
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrderStart: (state) => { state.loading = true; state.error = null; },
    createOrderSuccess: (state, action) => { 
      state.loading = false; 
      state.currentOrder = action.payload;
      state.orders.push(action.payload);
    },
    createOrderFailure: (state, action) => { state.loading = false; state.error = action.payload; },

    fetchOrdersStart: (state) => { state.loading = true; state.error = null; },
    fetchOrdersSuccess: (state, action) => { state.loading = false; state.orders = action.payload; },
    fetchOrdersFailure: (state, action) => { state.loading = false; state.error = action.payload; },

    fetchOrderDetails: (state, action) => {
      state.currentOrder = state.orders.find(o => o.id === action.payload) || null;
    },

    cancelOrder: (state, action) => {
      state.orders = state.orders.map(o => o.id === action.payload ? { ...o, status: "Cancelled" } : o);
      if (state.currentOrder?.id === action.payload) state.currentOrder.status = "Cancelled";
    }
  }
});

export const {
  createOrderStart, createOrderSuccess, createOrderFailure,
  fetchOrdersStart, fetchOrdersSuccess, fetchOrdersFailure,
  fetchOrderDetails, cancelOrder
} = orderSlice.actions;

export default orderSlice.reducer;
