import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//fetch all countries======
const allCountriesUrl =
  "https://apiv3.apifootball.com/?action=get_countries&APIkey=81f3c423a6c0c5ff71667bdbd97b2f9acd6b632d1f672effd14d10405ace9b42";

export const Countries = createAsyncThunk("Countries", async () => {
  const response = await axios.get(allCountriesUrl);
  // console.log(response);
  return response.data;
});
//end feth all countries=====

//fetch all leagues=========
const allLeaguesUrl =
  "https://apiv3.apifootball.com/?action=get_leagues&APIkey=81f3c423a6c0c5ff71667bdbd97b2f9acd6b632d1f672effd14d10405ace9b42";

export const Leagues = createAsyncThunk("Leagues", async () => {
  const response = await axios.get(allLeaguesUrl);
  // console.log(response);
  return response.data;
});
//end fetch all leagues

//fetch all matches
// const MatchesUrl = `https://apiv3.apifootball.com/?action=get_events&from=${}&to=${}&league_id=${}&APIkey=81f3c423a6c0c5ff71667bdbd97b2f9acd6b632d1f672effd14d10405ace9b42`

const initialState = {
  data: [],
  filterData: [],
  isLoading: true,
  leagues: [],
};

export const matchesReducer = createSlice({
  name: "matchesData",
  initialState,
  reducers: {
    saveChange: (state, action) => {
      if (action.payload == "") {
        state.filterData = state.data;
      }
      console.log(action.payload);
      let newArr = state.data.filter((e) => {
        return (
          e.country_name.slice(0, action.payload.length).toLowerCase() ==
          action.payload.toLowerCase()
        );
      });
      if (newArr.length == 0) {
        state.filterData = state.data;
      } else state.filterData = newArr;
    },
    //   increment: (state) => {
    //     state.value += 1
    //   },
  },
  extraReducers: {
    [Countries.fulfilled]: (state, action) => {
      // console.log(action);
      state.data = action.payload;
      state.filterData = action.payload;
      state.isLoading = false;
    },
    [Leagues.fulfilled]: (state, action) => {
      // console.log(action);
      state.leagues = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveChange } = matchesReducer.actions;

export default matchesReducer.reducer;
