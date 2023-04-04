import { createSlice } from "@reduxjs/toolkit";

const myProductSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addMyProduct(state, action) {
            state.push(action.payload)
        }
    }
})

export const {addMyProduct} = myProductSlice.actions;
export default myProductSlice.reducer