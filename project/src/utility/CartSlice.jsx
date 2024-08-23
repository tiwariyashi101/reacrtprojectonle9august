import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((obj) => obj.id !== id); 


      // state.ids =state.ids.filter((objid)=>{
      //   return objid!=id;
      // })
    },clearCart:(state)=>{
      state.items.length=0
    }
  }
});

export const { addCart, removeCart } = cart.actions;
export default cart.reducer;
