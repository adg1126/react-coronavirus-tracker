import { createSelector } from 'reselect';

const selectData = state => state.data;

export const selectDataObj = createSelector([selectData], data => data.data);

export const selectCountries = createSelector(
  [selectData],
  data => data.countries
);

export const selectCountryData = createSelector(
  [selectData],
  data => data.countryData
);

export const selectIsFetched = createSelector(
  [selectData],
  data => data.isFetched
);

export const selectCountry = createSelector([selectData], data => data.country);
