/* eslint-disable no-undef */

import $ from "jquery";
import { useEffect } from "react";
import { Contact } from "./Components/Contact/Contact";
import { NewsDetailes } from "./Components/NewsDetailes/NewsDetailes";
import { Home } from "./pages/Home";
// import { NewsDetailed } from "./pages/NewsDetailes";
import Result from "./pages/Result";
import { TeamAbout } from "./pages/TeamAbout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/generalComponents/Header";
import Footer from "./Components/generalComponents/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useJquery } from "./hooks/useJquery";

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
      <Contact /> */}

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

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
