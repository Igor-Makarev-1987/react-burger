import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentIngridient: {}
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