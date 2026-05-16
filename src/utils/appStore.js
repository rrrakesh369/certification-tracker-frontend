import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";
import feedReducer from './feedSlice'
import feedIdReducer from './feedIdSlice'
import updateReducer from './updateSlice'


const appStore= configureStore({
    reducer:{
        emp:employeeReducer,
        feed:feedReducer,
        eId:feedIdReducer,
        update:updateReducer,
    },
});

export default appStore;