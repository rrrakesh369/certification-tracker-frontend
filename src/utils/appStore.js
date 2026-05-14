import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";

const appStore= configureStore({
    reducer:{
        emp:employeeReducer,
    }
})

export default appStore;