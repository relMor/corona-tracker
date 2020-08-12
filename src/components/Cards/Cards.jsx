import React from "react";

import { Card, Grid } from "@material-ui/core";

import cx from "classnames";

import styles from "./Cards.module.css";
import SingleCard from "./Card/SingleCard";

const Cards = ({ data: { confirmed } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  //console.log(confirmed);
  const realDate = confirmed.lastUpdate;
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
          <SingleCard name="Infected" data={confirmed.confirmed} date={realDate} />
        </Grid>
        <Grid
          xs={12}
          md={3}
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <SingleCard name="Recovered" data={confirmed.recovered} date={realDate} />
        </Grid>
        <Grid
          xs={12}
          md={3}
          item
          component={Card}
          className={cx(styles.card, styles.deaths)}
        >
          <SingleCard name="Deaths" data={confirmed.deaths} date={realDate} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
