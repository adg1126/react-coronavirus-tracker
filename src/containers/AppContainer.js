import { connect } from 'react-redux';
import {
  fetchDataStart,
  fetchCountriesStart,
  fetchCountryDataStart
} from '../redux/data/dataActions';
import { createStructuredSelector } from 'reselect';
import { selectCountry } from '../redux/data/dataSelectors';
import App from '../App';

const mapStateToProps = createStructuredSelector({ country: selectCountry });

export default connect(mapStateToProps, {
  fetchDataStart,
  fetchCountriesStart,
  fetchCountryDataStart
})(App);
