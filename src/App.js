import React from "react";
import { Routes, Route } from "react-router-dom";


import "./App.css";



import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home";

import PersonalOffice from './components/PersonalOffice/PersonalOffice';

// import About from './About/About';
import Footer from "./components/Footer/Footer";
// import NotFound from './NotFound/NotFound';

export const App = () => {
  return (
    <div className="app_wrapper">
      <Header />
      {/* <Home/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal_office" element={<PersonalOffice />} />
         
          {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
