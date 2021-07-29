import React from 'react';
import _ from 'lodash';
import CountUp from 'react-countup';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  infected: {
    borderBottom: '10px solid rgba(0, 0, 255, 0.5)'
  },
  recovered: {
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)'
  },
  deaths: {
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)'
  }
});

export default function CardsGrid({
  data: { confirmed, recovered, deaths, lastUpdate },
  countryData,
  country
}) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const cardContent = [
    {
      classes: classes.infected,
      title: `TOTAL INFECTED ${country.toUpperCase() || 'WORLDWIDE'}`,
      data:
        !_.isArray(countryData) && !_.isEmpty(countryData)
          ? countryData.confirmed.value
          : confirmed.value,
      date: new Date(lastUpdate).toDateString(),
      statistic: 'Number of active COVID-19 cases'
    },
    {
      classes: classes.recovered,
      title: `TOTAL RECOVERED ${country.toUpperCase() || 'WORLDWIDE'}`,
      data:
        !_.isArray(countryData) && !_.isEmpty(countryData)
          ? countryData.recovered.value
          : recovered.value,
      date: new Date(lastUpdate).toDateString(),
      statistic: 'Number of recoveries from COVID-19'
    },
    {
      classes: classes.deaths,
      title: `TOTAL DEATHS ${country.toUpperCase() || 'WORLDWIDE'}`,
      data:
        !_.isArray(countryData) && !_.isEmpty(countryData)
          ? countryData.deaths.value
          : deaths.value,
      date: new Date(lastUpdate).toDateString(),
      statistic: 'Number of deaths caused by COVID-19 deaths'
    }
  ];

  const renderCard = ({ title, data, date, statistic, classes }) => (
    <Card className={classes}>
      <CardContent>
        <Typography color='textSecondary' gutterBottom>
          {title}
        </Typography>
        <Typography variant='h5'>
          <CountUp start={0} end={data} duration={2.5} separator=',' />
        </Typography>
        <Typography color='textSecondary'>{date}</Typography>
        <Typography variant='body2'>{statistic}</Typography>
      </CardContent>
    </Card>
  );

  return (
    <Grid
      container
      direction={matchesSM ? 'column' : 'row'}
      justifyContent={matchesSM ? undefined : 'center'}
      alignItems={matchesSM ? 'center' : undefined}
    >
      {cardContent.map((c, i) => (
        <Grid
          style={{ maxWidth: 285, margin: matchesSM ? '10px 0' : '0 10px' }}
          item
          xs={12}
          md={3}
          key={i}
        >
          {renderCard(c)}
        </Grid>
      ))}
    </Grid>
  );
}
