import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart : []
}

export const cartSlice = createSlice({
    name : "cart",
    initialState : initialState,
    reducers : {
        addCart : ( state, action) =>{
            const exists = state.cart.find(e => e.id == action.payload.id);
            if(!exists){

                state.cart = [...state.cart, action.payload];
            }
        },
        removeFromCart : (state,action) => {
          state.cart = state.cart.filter(e => e.id !== action.payload.id)
        }
    }
})

export const { addCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer