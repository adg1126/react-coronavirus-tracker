import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { fetchData } from './api';
import image from './assets/image.png';

import CardsGrid from './components/CardsGrid ';
import Chart from './components/Chart';
import CountryPicker from './components/CountryPicker';

export default class App extends Component {
  state = { data: {}, country: '', countryData: {} };

  async componentDidMount() {
    this.setState({ data: await fetchData() });
  }

  handleCountryChange = async country => {
    const countryData = await fetchData(country);
    this.setState({ countryData, country: country });
  };

  render() {
    const { data, country, countryData } = this.state;

    return (
      <Grid container direction='column' alignItems='center' spacing={10}>
        <Grid item>
          <img style={{ width: '220px' }} src={image} alt='COVID-19' />
        </Grid>
        {Object.keys(data).length > 0 ? <CardsGrid {...data} /> : null}
        <Grid item>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
        </Grid>
        <Grid item>
          <Chart countryData={countryData} country={country} />
        </Grid>
      </Grid>
    );
  }
}
