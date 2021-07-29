import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCountries,
  selectIsFetched,
  selectCountry
} from '../redux/data/dataSelectors';
import { setCountry } from '../redux/data/dataActions';

import CountryPicker from '../components/CountryPicker';
import WithSpinner from './WithSpinner';

const mapStateToProps = createStructuredSelector({
  countries: selectCountries,
  country: selectCountry,
  isFetched: selectIsFetched
});

export default compose(
  connect(mapStateToProps, { setCountry }),
  WithSpinner
)(CountryPicker);
