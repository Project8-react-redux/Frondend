import { configureStore } from "@reduxjs/toolkit";
import MatchesReducer from "./Reducers/MatchesReducer";
import VideosReducer from "./Reducers/VedioReducer";
import ArticlesReducer from "./Reducers/ArticleReducer";


export const store = configureStore({
  reducer: {
    matches: MatchesReducer,
    videos: VideosReducer,
    articles: ArticlesReducer,
  },
});
