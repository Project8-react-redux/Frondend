/* eslint-disable no-undef */

import $ from "jquery";
import { useEffect } from "react";
import { Contact } from "./Components/Contact/Contact";
import { NewsDetailes } from "./Components/NewsDetailes/NewsDetailes";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./Components/generalComponents/Header";
import Footer from "./Components/generalComponents/Footer";
// import { NewsDetailed } from "./pages/NewsDetailes";
import Result from "./pages/Result";
import { TeamAbout } from "./pages/TeamAbout";
import { useJquery } from "./hooks/useJquery";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import About from "./pages/About";
import FootballSnippet from "./Components/FootballSnippet/FootballSnippet";


function App() {
  const { reloadJquery } = useJquery();

  useEffect(() => {
    reloadJquery();
  });
  return (
    <>
      {/* <TeamAbout />
      <NewsDetailed /> */}
      {/* <Result /> */}
      {/* <Contact /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/FootballSnippet" element={<FootballSnippet />} />


          <Route path="/Contact" element={<Contact />} />
          <Route path="/NewsDetailes/:id" element={<NewsDetailes />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* {"admin dashboard profile login register about " } */}
    </>
  );
}

export default App;
