import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BlogPage from "./BlogPage";
import BlogItem from "./BlogItem";
import AboutUs from "./AboutUs";
import Events from "./Events";
import Katalog from "./Katalog";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Blog" element={<BlogPage />} />
      <Route path="/BlogItem" element={<BlogItem />} />
      <Route path="/Rólunk" element={<AboutUs />} />
      <Route path="/Események" element={<Events />} />
      <Route path="/Katalógus" element={<Katalog />} />
    </Routes>
  );
};

export default Routing;
