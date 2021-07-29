import React from 'react';
import _ from 'lodash';
import { Line, Bar } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Chart({ countryData, country }) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const renderLineChart = () =>
    countryData && countryData.length ? (
      <Line
        data={{
          labels: countryData.map(({ reportDate }) =>
            new Date(reportDate).toDateString()
          ),
          datasets: [
            {
              data: countryData.map(({ confirmed }) => confirmed),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true
            },
            {
              data: countryData.map(({ deaths }) => deaths),
              label: 'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              fill: true
            },
            {
              data: countryData.map(({ recovered }) => recovered),
              label: 'Recovered',
              borderColor: 'green',
              backgroundColor: 'rgba(0, 255, 0, 0.5)',
              fill: true
            }
          ]
        }}
      />
    ) : null;

  const renderBarChart = () => {
    const { confirmed, recovered, deaths, lastUpdate } = countryData;

    return confirmed && !_.isEmpty(confirmed) ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)'
              ],
              data: [confirmed.value, recovered.value, deaths.value]
            }
          ]
        }}
        options={{
          legend: { display: false },
          title: {
            display: true,
            text: `Current state in ${country}. Last updated on ${new Date(
              lastUpdate
            ).toDateString()}`
          }
        }}
      />
    ) : null;
  };
  return (
    <Grid container justifyContent='center'>
      <Grid item style={{ width: matchesMD ? '90vw' : '50vw' }}>
        {country ? renderBarChart() : renderLineChart()}
      </Grid>
    </Grid>
  );
}
