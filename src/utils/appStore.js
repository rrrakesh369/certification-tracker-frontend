import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";
import feedReducer from './feedSlice'


const appStore= configureStore({
    reducer:{
        emp:employeeReducer,
        feed:feedReducer,
    },
});

export default appStore;