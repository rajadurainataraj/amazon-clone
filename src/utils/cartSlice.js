import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        toggle: false,
        item: []
    },
    reducers: {
        showMenu: (state) => {
            state.toggle = !state.toggle
        },
        hideMenu: (state) => {
            state.toggle = false
        },
        addItem: (state, action) => {
            const findItem = state.item.find(item => item.id === action.payload.id);
            findItem ? findItem.quantity++ : state.item.push({ ...action.payload, quantity: 1 })
        },
        increaseQuantity: (state, action) => {
            // const findItem = state.item.find((item) => item.id === action.payload);
            // findItem && findItem.quantity++
            state.item = state.item.map((item) => {
                return item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
            })
        },
        decreaseQuantity: (state, action) => {
            state.item = state.item.map((item) => {
                return item.id === action.payload ? { ...item, quantity: item.quantity !==0 ? item.quantity - 1:item } : item
            })
        },
        removeItem: (state, action) => {
            state.item = state.item.filter((item)=>item.id !== action.payload)
        }
    }

})
export const { showMenu, hideMenu, addItem, increaseQuantity, decreaseQuantity,removeItem } = cartSlice.actions
export default cartSlice.reducer