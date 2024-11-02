import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false
    },
    reducers:{
        setShowGptSearch:(state,action)=>{
            state.showGptSearch = !state.showGptSearch;
        }
    }
});

export const { setShowGptSearch } = gptSlice.actions ;

export default gptSlice.reducer;