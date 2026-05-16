import { createSlice } from "@reduxjs/toolkit";

const updateSlice = createSlice({
    name: "update",
    initialState: null,
    reducers:{
        addUpdate: (state,action)=>{
            return action.payload;
        },
        removeUpdate: (state,action)=>{
            return null;
        }
    }
});
export const {addUpdate,removeUpdate}= updateSlice.actions;

export default updateSlice.reducer;