import { combineReducers } from "redux"; 
import { ingridientsReducer } from './ingridientsReducer';
import { modalReducer } from "./modalReducer";
import {constructorIngridientReducer} from './constructorIngridientReducer';

export const rootReducer = combineReducers({
    ingridients: ingridientsReducer,
    modal: modalReducer,
    constructorIngridient: constructorIngridientReducer
});