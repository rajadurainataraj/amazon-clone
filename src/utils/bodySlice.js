import { createSlice } from "@reduxjs/toolkit";

const bodySlice = createSlice({
    name: 'body',
    initialState: {
        count:0
    },
    reducers: {
        increment: (state) => {
            if (state.count === 4) {
                state.count = 0
            } else {
                state.count =  state.count +1; 
            }
           
        },
        decrement: (state) => {
            if (state.count === 0) {
                state.count = 4
            } else {
                state.count =  state.count -1; 
            }
          
        }
    }
})
export const { increment, decrement } = bodySlice.actions
export default bodySlice.reducer