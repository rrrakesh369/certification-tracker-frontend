import { createSlice } from "@reduxjs/toolkit";

const updateSlice = createSlice({
    name: "update",
    initialState: null,
    reducers:{
        addUpdate: (state,action)=>{
            return action.payload;
        },
        removeEmpFromFeed: (state,action)=>{
            const newFeed = state.filter((emp)=>emp._id !== action.payload)
            return newFeed;
        }
    }
});
export const {addUpdate,removeEmpFromFeed}= updateSlice.actions;

export default updateSlice.reducer;