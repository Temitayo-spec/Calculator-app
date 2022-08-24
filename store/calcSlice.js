/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable quotes */
import { createSlice } from "@reduxjs/toolkit";

const calcSlice = createSlice({
  name: "calc",
  initialState: {
    values: "",
    output: "",
    theme: 1,
    loading: true,
  },
  reducers: {
    setValue: (state, action) => {
      state.values = action.payload;
    },
    setOutput: (state, action) => {
      state.output = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const selectValue = (state) => state.calc.values;
export const selectOutput = (state) => state.calc.output;
export const selectTheme = (state) => state.calc.theme;
export const loading = (state) => state.calc.loading;

export const {
  setValue, setOutput, setTheme, setLoading,
} = calcSlice.actions;
export const calcReducer = calcSlice.reducer;
