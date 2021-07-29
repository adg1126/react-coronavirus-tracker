import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Typography } from '@material-ui/core';

const Spinner = () => (
  <Grid
    container
    justifyContent='center'
    alignContent='center'
    direction='column'
  >
    <Grid item>
      <CircularProgress size={100} color='secondary' />
    </Grid>
    <Grid item>
      <Typography variant='h6'>Loading...</Typography>
    </Grid>
  </Grid>
);

export default Spinner;
