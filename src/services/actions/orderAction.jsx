import { createAsyncThunk } from "@reduxjs/toolkit";
import { submitOrder } from '../../utils/api';

export const postOrder = createAsyncThunk(
    "postOrder",
     async (ingridientIds) => {
      try {
        const orderId = await submitOrder(ingridientIds);
        return { orderId };
      } catch (e) {
        console.error(e);
      }
    }
);