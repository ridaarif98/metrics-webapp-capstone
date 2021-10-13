import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import covidReducer from './metrics/metrics';
import countryReducer from './country/country';
import headingReducer from './continent/continent';

const reducer = combineReducers({
  covidReducer,
  countryReducer,
  headingReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
