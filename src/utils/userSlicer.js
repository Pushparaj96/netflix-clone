import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser:(state,action) => action.payload,
        removeUser:(state,action) => null
    }
});


export const { addUser , removeUser } = userSlice.actions; // exporting actions , so we can import and dispatch


export default userSlice.reducer;  // exporting all reducers as single reducer