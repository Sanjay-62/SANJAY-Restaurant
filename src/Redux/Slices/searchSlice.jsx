import { createSlice } from "@reduxjs/toolkit";
const SearchSlice=createSlice({
    name:"Search",initialState:{
        Search:"",
    },
    reducers:{
        setSearch:(state,action)=>{
            state.Search=action.payload;
        },
    },
});
export const {setSearch}=SearchSlice.actions;
export default SearchSlice.reducer;