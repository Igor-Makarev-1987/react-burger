import {createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

const initialState = {
    constructorIngridient: {
        bun: [],
        ingridients: []
    },
    isLoading: false,
    error: null,
    isIngredientDragged: false,
}

const constructorIngridients = createSlice({
    name: 'constructorIngridients',
    initialState,
    reducers: {
        addIngridient: (state, action) => {
            // console.log(action.payload)
            // console.log(state.constructorIngridient.ingridients)

            let newConstructorIngridients;
            if(action.payload.type === 'bun') {
                if(state.constructorIngridient.length > 0) {
                    newConstructorIngridients = [...state.constructorIngridient, action.payload]
                } else {
                    newConstructorIngridients = [ action.payload ]
                }

                state.constructorIngridient.bun = newConstructorIngridients         
            } else {
                // state.constructorIngridient.ingridients = [
                //     ...state.constructorIngridient.ingridients,
                //     {...action.payload, id:uuid()}
                // ]

                state.constructorIngridient.ingridients = [
                    ...state.constructorIngridient.ingridients, action.payload
                    // {...action.payload, id:uuid()}
                ]
            }

            // сортируем добавленные ингридиенты
            // state.constructorIngridient.ingridients.sort( (a, b) => a._id.localeCompare(b._id))
        },

        // перетаскивание элемента
        moveIngredients: (state, action) => {
            const dragItem = state.constructorIngridient.ingridients[action.payload.dragIndex];
            if (dragItem) {
              const copiedState = [...state.constructorIngridient.ingridients];

              // remove item by hover index and replace it with the dragItem
              const prevItem = copiedState.splice(
                action.payload.hoverIndex,
                1,
                dragItem
              );
              copiedState.splice(action.payload.dragIndex, 1, prevItem[0]);
      
              state.constructorIngridient.ingridients = [...copiedState];
            }
        },

        changeDraggingIngredientState: (state, action) => {
            state.isIngredientDragged = action.payload;
          },

        deleteIngridients: (state, action) => {
            console.log(action)
            state.constructorIngridient.ingridients.forEach( (value, index) => {
                if(value.id === action.payload) {
                    state.constructorIngridient.ingridients =  [
                        ...state.constructorIngridient.ingridients.slice(0, index),
                        ...state.constructorIngridient.ingridients.splice(index + 1)]
                }
            })
        }
    }
})

export const {
    addIngridient,
    moveIngredients,
    deleteIngridients,
    changeDraggingIngredientState
} = constructorIngridients.actions;
  
export default constructorIngridients.reducer;