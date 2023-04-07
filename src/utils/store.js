import { configureStore } from "@reduxjs/toolkit";
import bodySlice from "./bodySlice";
import cartSlice from "./cartSlice";
import headerSlice from "./headerSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        body: bodySlice,
        header:headerSlice,
    },
})
export default store