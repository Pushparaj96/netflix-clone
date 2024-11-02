import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
    name:"appConfig",
    initialState:{
        language:"en"
    },
    reducers:{
        changeAppLanguage:(state,action)=>{
            state.language = action.payload;
        }
    }
});


export const { changeAppLanguage } = appConfigSlice.actions;

export default appConfigSlice.reducer;