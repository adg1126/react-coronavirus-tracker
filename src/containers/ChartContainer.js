import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCountry,
  selectCountryData,
  selectIsFetched
} from '../redux/data/dataSelectors';

import WithSpinner from './WithSpinner';
import Chart from '../components/Chart';

const mapStateToProps = createStructuredSelector({
  country: selectCountry,
  countryData: selectCountryData,
  isFetched: selectIsFetched
});

export default compose(connect(mapStateToProps), WithSpinner)(Chart);
