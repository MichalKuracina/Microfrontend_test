import React from "react";
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from "./Components/MarketingApp";
import Header from "./Components/Header";


export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};