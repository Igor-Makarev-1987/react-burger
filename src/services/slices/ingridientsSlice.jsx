import { createSlice } from "@reduxjs/toolkit";
import { loadAllIngredients } from "../actions/ingridientAction";

const initialState = {
    ingridients: [],
    isLoading: false,
    error: null,
}

const ingridientSlice = createSlice({
    name: 'ingridients',
    initialState,
    reducers: {
        // убрано по заданию из тз
        /*
        addIngridient: (state, action) => {
            let newConstructorIngridients;
            if(action.payload.type === 'bun') {
                if(state.constructorIngridient.length > 0) {
                    newConstructorIngridients = [...state.constructorIngridient, action.payload]
                } else {
                    newConstructorIngridients = [ action.payload ]
                }

                state.constructorIngridient.bun = newConstructorIngridients
                    // constructorIngridient: {...state.constructorIngridient, 
                    //     bun: newConstructorIngridients
                    // }
         
            } else {
                // проверить и скорее всего убрать
                // if(state.constructorIngridient.length > 0) {
                //     newConstructorIngridients = [...state.constructorIngridient.ingridients, ...action.payload]
                // } else {
                //     newConstructorIngridients = [ {...action.payload, id:uuid}]
                // }
              
                // state.constructorIngridient.ingridients = {...action.payload}
                state.constructorIngridient.ingridients = [
                    ...state.constructorIngridient.ingridients,
                    {...action.payload, id:uuid()}
                ]

                // return {
                //     ...state,
                //     constructorIngridient: {...state.constructorIngridient, 
                //         ingridients: newConstructorIngridients
                //     }
                // }
            }

            // сортируем добавленные ингридиенты
            state.constructorIngridient.ingridients.sort( (a, b) => a._id.localeCompare(b._id))
        }, */

        // удалить по тз
        // deleteIngridients: (state, action) => {
        //     state.constructorIngridient.ingridients.forEach( (value, index) => {
        //         if(value.id == action.payload) {
        //             state.constructorIngridient.ingridients =  [
        //                 ...state.constructorIngridient.ingridients.slice(0, index),
        //                 ...state.constructorIngridient.ingridients.splice(index + 1)]
        //         }
        //     })
        // }


    },

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

export const {

} = ingridientSlice.actions;
  
export default ingridientSlice.reducer;
