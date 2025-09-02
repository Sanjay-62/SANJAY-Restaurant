import { createSlice } from "@reduxjs/toolkit";
const CategorySlice=createSlice({name:"Category",initialState:{Category:"ALL",},reducers:{setCategory:(state,action)=>{state.Category=action.payload;
}}});
export const {setCategory}=CategorySlice.actions;
export default CategorySlice.reducer;