import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decremnt: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.action += action.payload;
    },
  },
});

export const { increment, decremnt, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
