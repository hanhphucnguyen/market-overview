import React from "react";
import { MarketOverview } from "react-ts-tradingview-widgets";

const MrkOverview = () => {
  return (
    <MarketOverview
      colorTheme="dark"
      height="450"
      width="100%"
      showChart={false}
      dateRange="1D"
      tabs={[
        {
          title: "Indices",
          symbols: [
            {
              s: "BINANCE:BTCUSDT",
            },
            {
              s: "BINANCE:DOTUSDT",
            },
            {
              s: "BINANCE:SOLUSDT",
            },
            {
              s: "BINANCE:BATUSDT",
            },
            {
              s: "BINANCE:LINKUSDT",
            },
            {
              s: "BINANCE:ETHUSDT",
            },
            {
              s: "BINANCE:XRPUSDT",
            },
            
            {
              s: "BINANCE:BNBUSDT",
            },
            {
              s: "BINANCE:ATOMUSDT",
            },
            {
              s: "BINANCE:AVAXUSDT",
            },
            {
              s: "BINANCE:DOGEUSDT",
            },
            {
              s: "BINANCE:ADAUSDT",
            },
            {
              s: "FOREXCOM:SPXUSD",
              d: "S&P 500",
            },
            {
              s: "CAPITALCOM:DXY",
            },
            {
              s: "GEMINI:USDTUSD",
            },
          ],
          originalTitle: "Indices",
        },
      ]}
    ></MarketOverview>
  );
};

export default MrkOverview;
