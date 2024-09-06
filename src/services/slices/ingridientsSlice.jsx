import { createSlice } from "@reduxjs/toolkit";
import { loadAllIngredients } from "../actions/ingridientAction";
import { getIngridients } from "../actions/ingridientsAction";
import { RootState } from "../store";

const initialState = {
    ingridients: [],
    isLoading: false,
    error: null,
}

const ingridientSlice = createSlice({
    name: 'ingridients',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
          .addCase(loadAllIngredients.fulfilled, (state, action) => {
            if(action.payload.success) {
                state.isLoading = false;
            }
          
            state.error = null;
            state.ingridients = action.payload
              ? action.payload.data
              : [];
          })
          .addCase(loadAllIngredients.pending, (state) => {
            state.isLoading = true;
            state.error = null
          })
          .addCase(loadAllIngredients.rejected, (state) => {
            state.isLoading = false;
            state.error =
              "Error, something went wrong. Contact support if problem persis";
          });
    },
});

// export const getAllIngridients (rootState: RootState) => 
//   rootState.ingridients.ingridients


// export const selectSelectedIngredients = (rootState: RootState) =>
//   rootState.ingredients.selectedIngredients;

export const {

} = ingridientSlice.actions;
  
export default ingridientSlice.reducer;
