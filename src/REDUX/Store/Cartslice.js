import { createSlice } from "@reduxjs/toolkit";

let Cartslice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },

    remove(state, action) {
      let rmv = state.filter((items) => items.id !== action.payload);
      return rmv;
    },

    increment(state, action) {
      let items = state.find((items) => items.id === action.payload);
      if (items) {
        items.quantity += 1;
      }
    },
    decrement(state, action) {
      let items = state.find((items) => items.id === action.payload);
      if (items && items.quantity > 1) {
        items.quantity -= 1;
      }
    },
  },
});
export let { add, remove, increment, decrement } = Cartslice.actions;
export default Cartslice.reducer;
