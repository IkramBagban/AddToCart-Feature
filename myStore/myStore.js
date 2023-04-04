import { configureStore } from "@reduxjs/toolkit";
import myProductReducer from "./myProductSlice";
import myCartReducer from "./myCartSlice";

export const myStore = configureStore({
    reducer:{
        product:  myProductReducer,
        cart: myCartReducer
    }
})