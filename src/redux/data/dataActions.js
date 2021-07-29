import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_COUNTRIES_START,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRY_DATA_START,
  FETCH_COUNTRY_DATA_SUCCESS,
  FETCH_COUNTRY_DATA_FAILURE,
  SET_COUNTRY
} from './dataActionTypes';

export const fetchDataStart = () => ({
  type: FETCH_DATA_START
});

export const fetchDataSuccess = dataObj => ({
  type: FETCH_DATA_SUCCESS,
  payload: dataObj
});

export const fetchDataFailure = errMsg => ({
  type: FETCH_DATA_FAILURE,
  payload: errMsg
});

export const fetchCountriesStart = () => ({
  type: FETCH_COUNTRIES_START
});

export const fetchCountriesSuccess = countriesArr => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countriesArr
});

export const fetchCountriesFailure = errMsg => ({
  type: FETCH_COUNTRIES_FAILURE,
  payload: errMsg
});

export const fetchCountryDataStart = country => ({
  type: FETCH_COUNTRY_DATA_START,
  payload: country
});

export const fetchCountryDataSuccess = countryObj => ({
  type: FETCH_COUNTRY_DATA_SUCCESS,
  payload: countryObj
});

export const fetchCountryDataFailure = errMsg => ({
  type: FETCH_COUNTRY_DATA_FAILURE,
  payload: errMsg
});

export const setCountry = country => ({ type: SET_COUNTRY, payload: country });
