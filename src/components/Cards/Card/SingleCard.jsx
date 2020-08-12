import React from "react";

import { CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";

const SingleCard = ({ data, date, name }) => {
  const setValue = { name: name, value: data.value };

  return (
    <div>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {setValue.name}
        </Typography>
        <Typography variant="h5">
          <CountUp
            start={0}
            end={setValue.value}
            duration={2.5}
            separator=","
          />
        </Typography>
        <Typography color="textSecondary">
          {new Date(date).toDateString()}
        </Typography>
        <Typography variant="body2">
          Number of active cases of COVID-19
        </Typography>
      </CardContent>
    </div>
  );
};

export default SingleCard;
