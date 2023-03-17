import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Chart from "./chart";
import Chart2 from "./chart2";
import ScreenWidget from "./screenerWidget";
import MrkOverview from "./marketOverview";
import TechWidget from "./techWidget";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "60vh",
  },
  section: {
    height: "100%",
    // padding: theme.spacing(2),
    backgroundColor: "#444654",
    border: "1px solid #ccc",
  },
  section2: {
    height: "80%",
    backgroundColor: "#444654",
    border: "1px solid #ccc",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={6} md={6} lg={6} className={classes.section}>
        <Chart />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} className={classes.section}>
        <Chart2 />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} className={classes.section2}>
        <ScreenWidget />
      </Grid>
      <Grid container item xs={12} sm={6} md={6} lg={6} className={classes.section2}>
        <Grid item xs={6} sm={6} md={6} lg={6} className={classes.section2}>
          <MrkOverview />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} className={classes.section2}>
          <TechWidget />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
