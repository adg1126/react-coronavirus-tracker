import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCountry,
  selectCountryData,
  selectDataObj,
  selectIsFetched
} from '../redux/data/dataSelectors';

import WithSpinner from './WithSpinner';
import CardsGrid from '../components/CardsGrid ';

const mapStateToProps = createStructuredSelector({
  data: selectDataObj,
  countryData: selectCountryData,
  country: selectCountry,
  isFetched: selectIsFetched
});

export default compose(connect(mapStateToProps), WithSpinner)(CardsGrid);
