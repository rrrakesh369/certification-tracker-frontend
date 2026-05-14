import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: 'employee',
    initialState: null,
    reducers: {
        storeEmployee: (state,action)=>{
            return action.payload;
        },
        removeEmployee: (state,action)=>{
            return null;
        }
    }
});

export const {storeEmployee,removeEmployee}= employeeSlice.actions;

export default employeeSlice.reducer;
