import { configureStore } from '@reduxjs/toolkit'
import MatchesReducer from './Reducers/MatchesReducer'

export const store = configureStore({
  reducer: {
    matches: MatchesReducer,
  },
})