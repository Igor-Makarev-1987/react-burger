import {createSlice } from "@reduxjs/toolkit";
import { IIngredient } from "../../types/types";

type TCurrentIngridient = {
    currentIngridient: IIngredient | null
}

const initialState: TCurrentIngridient = {
    currentIngridient: null
}

const viewedIngridient = createSlice({
    name: 'viewedIngridient',
    initialState,
    reducers: {
        currentIngridient: (state, action) => {
            state.currentIngridient = action.payload
        }
    }
})

export const {
    currentIngridient,
} = viewedIngridient.actions;
  
export default viewedIngridient.reducer;