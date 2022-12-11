/* eslint-disable no-undef */

import $ from "jquery";
import { useEffect } from "react";
import { Contact } from "./Components/Contact/Contact";
import { NewsDetailes } from "./Components/NewsDetailes/NewsDetailes";
import { Home } from "./pages/Home";
// import { NewsDetailed } from "./pages/NewsDetailes";
import Result from "./pages/Result";
import { TeamAbout } from "./pages/TeamAbout";

function App() {
  const { reloadJquery } = useJquery();

  useEffect(() => {
    reloadJquery();
  });
  return (
    <>
      {/* <TeamAbout />
      <NewsDetailed />
      <Result />
      <Contact />

      {/* {"admin dashboard profile login register about " } */}
    </>
  );
}

export default App;
