import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        suggestedMovies:null,
        gptTmdbResults:null
    },
    reducers:{
        setShowGptSearch:(state,action)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptSuggested:(state,action)=>{
            state.suggestedMovies = action.payload;
        },
        addGptTmdbResults:(state,action)=>{
            state.gptTmdbResults = action.payload;
        },
        clearGptSearchResults:(state,action)=>{
            state.gptTmdbResults = null;
            state.suggestedMovies = null;
        }
    }
});

export const { setShowGptSearch , addGptSuggested , addGptTmdbResults , clearGptSearchResults} = gptSlice.actions ;

export default gptSlice.reducer;