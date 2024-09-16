import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    ids: []  // Assuming you have an 'ids' array in the state
  },
  reducers: {
    addCart: (state, action) => {
      state.items.push(action.payload);
      state.ids.push(action.payload.id); // Also add the id to the ids array
    },
    removeCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((obj) => obj.id !== id);
      state.ids = state.ids.filter((objId) => objId !== id);
    },
    clearCart: (state) => {
      state.items = [];
      state.ids = []; // Clear both items and ids
    }
  }
});

// Exporting the actions
export const { addCart, removeCart, clearCart } = cartSlice.actions;

// Exporting the reducer to be used in the store
export default cartSlice.reducer;

