import {configureStore} from "@reduxjs/toolkit";
import logger from 'redux-logger'
import { applyMiddleware } from "redux";
import ingridientsReducer  from './slices/ingridientsSlice';
import constructorIngridientsReducer from './slices/constructorIngridientsSlice';
import checkoutReducer from './slices/orderSlice';
import viewedIngridientReducer from "./slices/viewedIngridient";

const preloadedState = {};

export const store = configureStore({
    reducer: {
        ingridients: ingridientsReducer,
        constructorIngridients: constructorIngridientsReducer,
        checkout: checkoutReducer,
        viewedIngridient: viewedIngridientReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
})