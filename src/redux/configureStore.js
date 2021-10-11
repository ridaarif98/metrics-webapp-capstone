import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import covidReducer from './metrics/metrics';
import countryReducer from './country/country';

const reducer = combineReducers({
  covidReducer,
  countryReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
