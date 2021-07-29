import { combineReducers } from 'redux';
import dataReducer from './data/dataReducers';

export default combineReducers({ data: dataReducer });
