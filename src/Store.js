import { configureStore } from "@reduxjs/toolkit";
import MatchesReducer from "./Reducers/MatchesReducer";
import VideosReducer from "./Reducers/VedioReducer";

export const store = configureStore({
  reducer: {
    matches: MatchesReducer,
    videos: VideosReducer,
  },
});
