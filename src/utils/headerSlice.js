import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: "header",
    initialState: {
        item: '',
    },
    reducers: {
        getInput: (state, action) => {
            state.item = action.payload
        }
    }
})
export const { getInput } = headerSlice.actions
export default headerSlice.reducer 