import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances() {
    return (
        <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title="Income" value="1,045.50" color="green"></DisplayBalance>
            </Grid.Column>
            <Grid.Column>
            <DisplayBalance title="Expense" value="1467.50" color="red"></DisplayBalance>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
}

export default DisplayBalances;