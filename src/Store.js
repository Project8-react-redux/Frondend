import { configureStore } from "@reduxjs/toolkit";
import MatchesReducer from "./Reducers/MatchesReducer";
import VideosReducer from "./Reducers/VedioReducer";
import ArticlesReducer from "./Reducers/ArticleReducer";
import ExpectationReducer from "./Reducers/ExpectationReducer";
import postReducer from "./Reducers/PostReduser";

export const store = configureStore({
  reducer: {
    matches: MatchesReducer,
    videos: VideosReducer,
    articles: ArticlesReducer,
    expectationData: ExpectationReducer,
    postsData: postReducer,
  },
});
