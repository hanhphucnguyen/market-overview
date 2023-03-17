import React from "react";
import { Screener } from "react-ts-tradingview-widgets";

const ScreenWidget = () => {
  return (
    <Screener
      width="100%"
      height={450}
      colorTheme="dark"
      defaultColumn="overview"
      defaultScreen="top_gainers"
      market="crypto"
      showToolbar={true}
      locale="en"
    />
    // <Screener colorTheme="dark" width="100%" height={300}></Screener>
  );
};

export default ScreenWidget;
