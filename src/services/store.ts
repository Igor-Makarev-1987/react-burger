import {configureStore, combineReducers} from "@reduxjs/toolkit";
// import logger from 'redux-logger'
import { applyMiddleware } from "redux";
import ingridientsReducer  from './slices/ingridientsSlice';
import constructorIngridientsReducer from './slices/constructorIngridientsSlice';
import checkoutReducer from './slices/orderSlice';
import viewedIngridientReducer from "./slices/viewedIngridient";
import formReducer from "./slices/formSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const preloadedState = {};

export const store = configureStore({
    reducer: {
        ingridients: ingridientsReducer,
        constructorIngridients: constructorIngridientsReducer,
        checkout: checkoutReducer,
        viewedIngridient: viewedIngridientReducer,
        // auth: authReducer,
        // user: userReducer,
        form: formReducer
        // profile: profileReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
})

// для типизации useSelect и useDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;