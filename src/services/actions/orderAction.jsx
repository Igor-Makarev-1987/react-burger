import { createAsyncThunk } from "@reduxjs/toolkit";
import { submitOrder } from '../../utils/api';

export const postOrder = createAsyncThunk(
    "postOrder",
     async (ingridientIds) => {
        const orderId = await submitOrder(ingridientIds);
        return { orderId };
    }
);