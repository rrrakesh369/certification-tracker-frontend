import { createSlice } from "@reduxjs/toolkit";
import { addFeed } from "./feedSlice";

const feedIdSlice = createSlice({
    name: "feedId",
    initialState: null,
    reducers: {
        addFeedId: (state, action)=>action.payload,
        removeFeed: (state, action)=>null,
    },
});

export const {addFeedId, removeFeed}=feedIdSlice.actions;
export default feedIdSlice.reducer;