import React from "react";
import { Statistic } from "semantic-ui-react";

function DisplayBalance({title, value, color="blue", size="tiny"}) {
    return (
        <Statistic size={size} color={color}>
        <Statistic.Label>{title}</Statistic.Label>
        <Statistic.Value>{value}</Statistic.Value>
      </Statistic>
    );
}

export default DisplayBalance;