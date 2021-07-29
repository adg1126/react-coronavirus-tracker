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

const INITIAL_STATE = {
  data: {},
  country: '',
  countries: [],
  countryData: null,
  isFetched: false,
  errMsg: ''
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return { ...state, isFetched: false };
    case FETCH_DATA_SUCCESS:
      return { ...state, isFetched: true, data: action.payload };
    case FETCH_COUNTRIES_START:
      return { ...state, isFetched: false };
    case FETCH_COUNTRIES_SUCCESS:
      return { ...state, isFetched: true, countries: action.payload };
    case FETCH_COUNTRY_DATA_START:
      return { ...state, isFetched: false };
    case FETCH_COUNTRY_DATA_SUCCESS:
      return { ...state, isFetched: true, countryData: action.payload };
    case SET_COUNTRY:
      return { ...state, country: action.payload };
    case FETCH_DATA_FAILURE:
    case FETCH_COUNTRIES_FAILURE:
    case FETCH_COUNTRY_DATA_FAILURE:
      return {
        ...state,
        isFetched: false,
        errMessage: action.payload
      };
    default:
      return state;
  }
};

export default dataReducer;
