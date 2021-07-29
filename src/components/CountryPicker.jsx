import React from 'react';
import { FormControl, Grid, makeStyles, NativeSelect } from '@material-ui/core';

const useStyles = makeStyles({
  formControl: { minWidth: 120 }
});

export default function CountryPicker({ countries, country, setCountry }) {
  const classes = useStyles();

  const handleChange = c => setCountry(c);

  return (
    <Grid container justifyContent='center'>
      <Grid item>
        <FormControl className={classes.formControl}>
          <NativeSelect
            value={country.length ? country : ''}
            onChange={e => handleChange(e.target.value)}
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
