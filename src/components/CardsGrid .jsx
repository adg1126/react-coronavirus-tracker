import React from 'react';
import CountUp from 'react-countup';
import classnames from 'classnames';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  infected: {
    borderBottom: '10px solid rgba(0, 0, 255, 0.5)'
  },
  recovered: {
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)'
  },
  deaths: {
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)'
  },
  card: { maxWidth: 275, margin: '10px' }
});

export default function CardsGrid({
  confirmed,
  recovered,
  deaths,
  lastUpdate
}) {
  const classes = useStyles();

  const cardContent = [
    {
      classes: classes.infected,
      title: 'INFECTED',
      data: confirmed.value,
      date: new Date(lastUpdate).toDateString(),
      statistic: 'Number of active COVID-19 cases'
    },
    {
      classes: classes.recovered,
      title: 'RECOVERED',
      data: recovered.value,
      date: new Date(lastUpdate).toDateString(),
      statistic: 'Number of recoveries from COVID-19'
    },
    {
      classes: classes.deaths,
      title: 'DEATHS',
      data: deaths.value,
      date: new Date(lastUpdate).toDateString(),
      statistic: 'Number of deaths caused by COVID-19 deaths'
    }
  ];

  const renderCard = ({ title, data, date, statistic }) => (
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
  );

  return (
    <Grid container justifyContent='center'>
      {cardContent.map((c, i) => (
        <Grid
          item
          className={classnames(classes.card, c.classes)}
          component={Card}
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
