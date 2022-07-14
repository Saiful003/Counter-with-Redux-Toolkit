import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  count: 0
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count--;
      }
    },
    reset: (state) => {
      state.count = 0;
    }
  }
});

export default counterSlice.reducer;
const { increment, decrement, reset } = counterSlice.actions;

export const useCounter = () => {
  return {
    increment,
    decrement,
    reset
  };
};
