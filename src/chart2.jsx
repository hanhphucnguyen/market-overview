import React from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const Chart2 = () => {
  return (
    <AdvancedRealTimeChart
      symbol="BINANCE:DOTUSDT"
      theme="dark"
      interval="15"
      timezone="Etc/UTC"
      style="1"
      locale="en"
      // toolbar_bg="#f1f3f6"
      // enable_publishing={false}
      hide_side_toolbar={false}
      withdateranges={false}
      allow_symbol_change={true}
      save_image={false}
      // details={false}
      hotlist={false}
      // show_popup_button={true}
      // popup_width="1000"
      // popup_height="650"
      autosize={true}
    />
  );
};

export default Chart2;