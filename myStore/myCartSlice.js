import { createSlice } from "@reduxjs/toolkit";

const myCartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToMyCart(state, action) {
            
            state.push(action.payload)
            console.log('cart state', state)
        }
    }
})

export const {addToMyCart} = myCartSlice.actions;
export default myCartSlice.reducer