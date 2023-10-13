import React from "react";
import { Routes, Route } from "react-router-dom";
// import datafake from "./datafake.json";
import datafake from "./datanot.json";


import "./App.css";

import Header from "./components/widgets/Header.jsx";
// import Home from "./page/Home";

// import PersonalOffice from "./components/PersonalOffice/PersonalOffice";

// import About from './About/About';
import Footer from "./components/widgets/Footer";
import Notarius from "./page/Notarius";
import NotariusPersonalOffice from "./page/NotariusPersonalOffice";
import ForСitizens from "./page/ForСitizens";
import ForNotaries from "./page/ForNotaries";
import NotarialActs from "./page/NotarialActs";
// import NotFound from './NotFound/NotFound';

export const App = () => {

  const products = datafake.products;
  return (
    <div className="app_wrapper">
      <Header />
      {/* <Home/> */}

      <Routes>
      {/* <Router> */}
        {/* <Switch> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/notarius" element={<Notarius />} />
          <Route path="/notarius/:id" element={<NotariusPersonalOffice products={products} />} /> */}
          <Route path="/" element={<Notarius />} />
          <Route path="/:id" element={<NotariusPersonalOffice products={products} />} />
          
          <Route path="/forcitizens" element={<ForСitizens />} />
          <Route path="/fornotaries" element={<ForNotaries />} />
          <Route path="/notarialacts" element={<NotarialActs />} />
          

          {/* <Route path="*" element={<NotFound />} /> */}
        {/* </Switch> */}
      {/* </Router> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
