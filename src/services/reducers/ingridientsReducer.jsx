import {  
    addIngridient, 
    ADD_INGRIDIENT,
    CURRENT_INGRIDIENTS, 
    GET_INGRIDIENTS_REQUEST,
    GET_INGRIDIENTS_SUCCESS,
    GET_INGRIDIENTS_FAILED
 } from "../actions/ingridientsAction";

const initialState = {
    ingridients: [],
    // constructorIngridient: {
    //     bun: [],
    //     ingridients: []
    // },
    constructorIngridient: [],
    currentIngridient: [],
    isLoading: false,
    error: null
}

export const ingridientsReducer = (state = initialState, action) => {
    switch(action.type) {
        case(ADD_INGRIDIENT): {
            let newConstructorIngridients;
            if(action.payload.type === 'bun') {
                if(state.constructorIngridient.length > 0) {
                    newConstructorIngridients = [...state.constructorIngridient, action.payload]
                } else {
                    newConstructorIngridients = [ action.payload]
                }
                return {
                    ...state,
                    constructorIngridient: {...state.constructorIngridient, 
                        bun: newConstructorIngridients
                    }
         
                }
            } else {
                if(state.constructorIngridient.length > 0) {
                    newConstructorIngridients = [...state.constructorIngridient, action.payload]
                } else {
                    newConstructorIngridients = [ action.payload]
                }
                // console.log(action.payload);
                // console.log(newConstructorIngridients);
                return {
                    ...state,
                    constructorIngridient: {...state.constructorIngridient, 
                        ingridients: newConstructorIngridients
                    }
                }
            }
        }
        case(CURRENT_INGRIDIENTS): {
            return {
                ...state,
                currentIngridient: action.payload
            }
        }
        case(GET_INGRIDIENTS_REQUEST): {
            return {
                ...state,
                isLoading: true, 
            }
        }
        case(GET_INGRIDIENTS_SUCCESS): {
            return {
                ...state,
                isLoading: false,
                error: null,
                ingridients: action.payload
            }
        }
        case(GET_INGRIDIENTS_FAILED): {
            return {
                ...state, 
                isLoading: false,
                error: action.payload,
                ingridients: []
            }
        }

        default: 
            return state
    }
};