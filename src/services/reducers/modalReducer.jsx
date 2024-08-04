import {
    OPEN_INGRIDIENT_MODAL,
    CLOSE_MODAL,
    OPEN_ORDER_MODAL
} from '../actions/modalAction';

const initialState = {
    ingredientsModal: false,
    orderModal: false,
};

export const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case (OPEN_INGRIDIENT_MODAL): {
           return {
                ...state,
                ingredientsModal: true
           }
        }
        case (CLOSE_MODAL): {
            return {
                ...state,
                orderModal: false,
                ingredientsModal: false,
            };
        }
        case(OPEN_ORDER_MODAL): {
            return {
                ...state,
                orderModal: true,
            }
        }

        default: 
            return state
    }
}