import React, { useEffect } from 'react';
import image from './assets/image.png';

import { Grid } from '@material-ui/core';
import CardsGridContainer from './containers/CardsGridContainer';
import CountryPickerContainer from './containers/CountryPickerContainer';
import ChartContainer from './containers/ChartContainer';

export default function App({
  fetchDataStart,
  fetchCountriesStart,
  fetchCountryDataStart,
  country
}) {
  useEffect(() => {
    fetchDataStart();
    fetchCountriesStart();
    fetchCountryDataStart(country);
  }, [fetchDataStart, fetchCountriesStart, fetchCountryDataStart, country]);

  return (
    <Grid container direction='column' alignItems='center' spacing={10}>
      <Grid item>
        <img style={{ width: '220px' }} src={image} alt='COVID-19' />
      </Grid>
      {<CardsGridContainer />}
      <Grid item>
        <CountryPickerContainer />
      </Grid>
      <Grid item>
        <ChartContainer />
      </Grid>
    </Grid>
  );
}
