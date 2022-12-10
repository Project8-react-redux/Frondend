import React from "react";
import HeroSection from "../Components/homeComponents/HeroSection";
import SearchModal from "../Components/homeComponents/SearchModal";
import LatestNews from "../Components/homeComponents/LatestNews";
import Matches from "../Components/homeComponents/Matches";
import Videos from "../Components/homeComponents/Videos";
import Popular from "../Components/homeComponents/Popular";
import TrendingNews from "../Components/homeComponents/TrendingNews";
import SoccerFeed from "../Components/homeComponents/SoccerFeed";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <TrendingNews />
      <Matches />
      <LatestNews />
      <SoccerFeed />
      <Videos />
      <Popular />
      <SearchModal />
    </>
  );
};
