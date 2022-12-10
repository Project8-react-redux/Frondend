import { configureStore } from "@reduxjs/toolkit";
import MatchesReducer from "./Reducers/MatchesReducer";
import ArticlesReducer from "./Reducers/ArticleReducer";

export const store = configureStore({
  reducer: {
    matches: MatchesReducer,
    articles: ArticlesReducer,
  },
});
