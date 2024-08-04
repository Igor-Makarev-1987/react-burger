import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchIngridientsRequest } from '../../utils/api';

export const loadAllIngredients = createAsyncThunk(
    "loadAllIngredients",
    async () => {
      try {
        return  fetchIngridientsRequest()
            .then( res => {
                return res
            }) ;
      } catch (e) {
        console.error(e);
      }
    }
);