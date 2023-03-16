import React from "react";
import { Screener } from "react-ts-tradingview-widgets";

const ScreenWidget = () => {
  return (
    // <Screener
    //   width="100%"
    //   height={460}
    //   colorTheme="dark"
    //   defaultColumn="overview"
    //   defaultScreen="general"
    //   market="crypto"
    //   showToolbar={true}
    //   locale="en"
    // />
    <Screener colorTheme="dark" width="100%" height={300}></Screener>
  );
};

export default ScreenWidget;
