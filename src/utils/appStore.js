import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";
import feedReducer from './feedSlice'
import feedIdReducer from './feedIdSlice'


const appStore= configureStore({
    reducer:{
        emp:employeeReducer,
        feed:feedReducer,
        eId:feedIdReducer
    },
});

export default appStore;