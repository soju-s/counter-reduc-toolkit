// initial state value

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

//  creating slice to hold reducer and actions for counter app

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // define action to update state
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
    reset:(state)=>{
      state.count=0
    }
  },
});

// export action

export const { increment, decrement ,incrementByAmount ,reset} = counterSlice.actions;

export default counterSlice.reducer;
