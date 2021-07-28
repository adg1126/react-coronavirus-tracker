import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../api';
import { FormControl, Grid, makeStyles, NativeSelect } from '@material-ui/core';

const useStyles = makeStyles({
  formControl: { minWidth: 120 }
});

export default function CountryPicker({ handleCountryChange }) {
  const classes = useStyles();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <Grid container justifyContent='center'>
      <Grid item>
        <FormControl className={classes.formControl}>
          <NativeSelect
            defaultValue=''
            onChange={e => handleCountryChange(e.target.value)}
          >
            <option value=''>Global</option>
            {countries.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Grid>
    </Grid>
  );
}
