import React from "react";

import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed } }) => {
  if (!confirmed) {
    return "Loading...";
  } else {
    return (
      <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          <Grid
            xs={12}
            md={3}
            item
            component={Card}
            className={cx(styles.card, styles.infected)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={confirmed.confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(confirmed.lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of active cases of COVID-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            xs={12}
            md={3}
            item
            component={Card}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5">
                {" "}
                <CountUp
                  start={0}
                  end={confirmed.recovered.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {" "}
                {new Date(confirmed.lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of recoveries from COVID-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            xs={12}
            md={3}
            item
            component={Card}
            className={cx(styles.card, styles.deaths)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={confirmed.deaths.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(confirmed.lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of deaths cause by COVID-19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Cards;
