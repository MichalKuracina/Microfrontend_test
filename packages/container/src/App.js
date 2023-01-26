import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import MarketingApp from "./Components/MarketingApp";
import Header from "./Components/Header";

const generateClannName = createGenerateClassName({
  productionPrefix: 'co'
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClannName={generateClannName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};