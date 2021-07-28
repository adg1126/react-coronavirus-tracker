import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../api';
import { Line, Bar } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Chart({
  countryData: { confirmed, recovered, deaths },
  country
}) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  });

  const renderLineChart = () =>
    dailyData && dailyData.length ? (
      <Line
        data={{
          labels: dailyData.map(({ reportDate }) =>
            new Date(reportDate).toDateString()
          ),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: 'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              fill: true
            },
            {
              data: dailyData.map(({ recovered }) => recovered),
              label: 'Recovered',
              borderColor: 'green',
              backgroundColor: 'rgba(0, 255, 0, 0.5)',
              fill: true
            }
          ]
        }}
      />
    ) : null;

  const renderBarChart = () =>
    confirmed ? (
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
          title: { display: true, text: `Current state in ${country}` }
        }}
      />
    ) : null;

  return (
    <Grid container justifyContent='center'>
      <Grid item style={{ width: matchesSM ? '90vw' : '50vw' }}>
        {country ? renderBarChart() : renderLineChart()}
      </Grid>
    </Grid>
  );
}
