import {  
    DELETE_INGRIDIENT,

 } from "../actions/constructorIngridientAction";

const initialState = {
    constructorIngridient: {
        bun:[],
        ingridients: []
    },
    isLoading: false,
    error: null
}

export const constructorIngridientReducer = (state = initialState, action) => {
    switch(action.type) {
        case(DELETE_INGRIDIENT): {
            // let newConstructorIngridients;
            // if(state.constructorIngridient.length > 0) {
            //     newConstructorIngridients = [...state.constructorIngridient, action.payload]
            // } else {
            //     newConstructorIngridients = [ action.payload]
            // }
            // return {
            //     ...state,
            //     constructorIngridient: newConstructorIngridients
            // }
        }

        default: 
            return state
    }
};