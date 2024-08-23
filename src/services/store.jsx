import {configureStore, combineReducers} from "@reduxjs/toolkit";
import logger from 'redux-logger'
import { applyMiddleware } from "redux";
import ingridientsReducer  from './slices/ingridientsSlice';
import constructorIngridientsReducer from './slices/constructorIngridientsSlice';
import checkoutReducer from './slices/orderSlice';
import viewedIngridientReducer from "./slices/viewedIngridient";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import formReducer from "./slices/formSlice"
// import profileReducer from "./slices/profileSlice";

const preloadedState = {};

export const store = configureStore({
    reducer: {
        ingridients: ingridientsReducer,
        constructorIngridients: constructorIngridientsReducer,
        checkout: checkoutReducer,
        viewedIngridient: viewedIngridientReducer,
        auth: authReducer,
        user: userReducer,
        form: formReducer
        // profile: profileReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
})