import {configureStore, combineReducers} from "@reduxjs/toolkit";
// import logger from 'redux-logger'
import { applyMiddleware } from "redux";
import ingridientsReducer  from './slices/ingridientsSlice';
import constructorIngridientsReducer from './slices/constructorIngridientsSlice';
import checkoutReducer from './slices/orderSlice';
import viewedIngridientReducer from "./slices/viewedIngridient";
import formReducer from "./slices/formSlice";
import currentOrderReducer from "./slices/currentOrderSlice";
import { TypedUseSelectorHook, 
    useDispatch as dispatchHook, 
    useSelector as selectorHook
} from 'react-redux'
import listOrdersReducer, { wsClose, wsConnecting, wsError, wsMessage, wsOpen }  from './slices/listOrdersSlice'
import userOrdersReducer, { wsCloseUser, wsConnectingUser, wsErrorUser, wsMessageUser, wsOpenUser }  from './slices/userOrdersSlice'
import { socketMiddleware, TWsActionTypes } from "./middleware/socketMiddleware";
import { ListOrdersActions } from "../types/socket";
import { wsConnect, wsDisconnect } from "./actions/listOrdersAction";
import { wsConnectUser, wsDisconnectUser } from "./actions/userOrdersAction";

const preloadedState = {};
// проверка типа
const listOrdersMiddleware: any = socketMiddleware({
    connect: wsConnect,
    disconnect: wsDisconnect,
    onConnecting: wsConnecting,
    onOpen: wsOpen,
    onClose: wsClose,
    onError: wsError,
    onMessage: wsMessage
})

const userOrdersMiddleware: any = socketMiddleware({
    connect: wsConnectUser,
    disconnect: wsDisconnectUser,
    onConnecting: wsConnectingUser,
    onOpen: wsOpenUser,
    onClose: wsCloseUser,
    onError: wsErrorUser,
    onMessage: wsMessageUser
}, true)

export const store = configureStore({
    reducer: {
        ingridients: ingridientsReducer,
        constructorIngridients: constructorIngridientsReducer,
        checkout: checkoutReducer,
        viewedIngridient: viewedIngridientReducer,
        // auth: authReducer,
        // user: userReducer,
        form: formReducer,
        listOrders: currentOrderReducer,
        listOrderss: listOrdersReducer,
        userOrders: userOrdersReducer
        // profile: profileReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(listOrdersMiddleware, userOrdersMiddleware)
    },
    preloadedState,
})

// export type RootState = ReturnType<typeof rootReducer>;

// для типизации useSelect и useDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// типизация 
export const useAppDispatch = dispatchHook.withTypes<AppDispatch>();
export const useAppSelector = selectorHook.withTypes<RootState>();