import React from "react";
import { ClubContent } from "../components/teamAboutComponents/ClubContent";
import { Hero } from "../components/teamAboutComponents/Hero";
import { Players } from "../components/teamAboutComponents/Players";

export const TeamAbout = () => {
  return (
    <>
      <Hero />

      {/* Club Section Begin */}
      <section className="club-section spad">
        <div className="container">
          <ClubContent />
          <Players />
        </div>
      </section>
      {/* Club Section End */}
    </>
  );
};
