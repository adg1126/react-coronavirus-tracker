import { takeLatest, put, all } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_DATA_START,
  FETCH_COUNTRIES_START,
  FETCH_COUNTRY_DATA_START
} from './dataActionTypes';
import {
  fetchDataSuccess,
  fetchDataFailure,
  fetchCountriesSuccess,
  fetchCountriesFailure,
  fetchCountryDataSuccess,
  fetchCountryDataFailure
} from './dataActions';

const url = 'https://covid19.mathdro.id/api';

export function* fetchDataAsync() {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = yield axios.get(url);

    yield put(fetchDataSuccess({ confirmed, recovered, deaths, lastUpdate }));
  } catch (err) {
    yield put(fetchDataFailure(err.message));
  }
}

export function* fetchDataStart() {
  yield takeLatest(FETCH_DATA_START, fetchDataAsync);
}

export function* fetchCountriesAsync() {
  try {
    const {
      data: { countries }
    } = yield axios.get(`${url}/countries`);

    yield put(fetchCountriesSuccess(countries.map(({ name }) => name)));
  } catch (err) {
    yield put(fetchCountriesFailure(err.message));
  }
}

export function* fetchCountriesStart() {
  yield takeLatest(FETCH_COUNTRIES_START, fetchCountriesAsync);
}

export function* fetchCountryDataAsync({ payload: country }) {
  try {
    if (country && country.length) {
      let newUrl = `${url}/countries/${country}`;

      const {
        data: { confirmed, recovered, deaths, lastUpdate }
      } = yield axios.get(newUrl);

      yield put(
        fetchCountryDataSuccess({ confirmed, recovered, deaths, lastUpdate })
      );
    } else {
      const { data } = yield axios.get(`${url}/daily`);

      yield put(
        fetchCountryDataSuccess(
          data.map(({ confirmed, recovered, deaths, reportDate }) => ({
            confirmed: confirmed.total,
            recovered: recovered.total,
            deaths: deaths.total,
            reportDate
          }))
        )
      );
    }
  } catch (err) {
    yield put(fetchCountryDataFailure(err.message));
  }
}

export function* fetchCountryDataStart() {
  yield takeLatest(FETCH_COUNTRY_DATA_START, fetchCountryDataAsync);
}

export function* dataSagas() {
  yield all([fetchDataStart(), fetchCountriesStart(), fetchCountryDataStart()]);
}
