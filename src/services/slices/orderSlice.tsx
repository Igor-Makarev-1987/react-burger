import { createSlice } from "@reduxjs/toolkit";
import { postOrder } from "../actions/orderAction"

const initialState = {
    ingridients: [],
    orderId: [],
    isLoading: false,
    error: ""
}

const checkout = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
       
    },

    extraReducers: (builder) => {
        builder
        .addCase(postOrder.fulfilled, (state, action) => {
          state.isLoading = false;
          state.orderId = action.payload?.orderId.order.number;
        })
        .addCase(postOrder.pending, (state) => {
          state.isLoading = true;
          state.error = "";
        })
        .addCase(postOrder.rejected, (state) => {
          state.isLoading = false;
          state.error =
            "Error, something went wrong. Contact support if problem persis";
        });
    },
})

export const {
    // getIdIngridients,
} = checkout.actions;
  
export default checkout.reducer;