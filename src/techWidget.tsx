import React from "react";
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";

const TechWidget = () => {
  return <TechnicalAnalysis 
  colorTheme="dark" 
  width="100%"
  showIntervalTabs = {false}
  symbol = "BINANCE:BTCUSDT"
  ></TechnicalAnalysis>;
};

export default TechWidget;
