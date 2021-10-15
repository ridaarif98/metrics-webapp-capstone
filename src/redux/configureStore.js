import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import covidReducer from './continent/continent';
import countryReducer from './country/country';
import headingReducer from './continentName/continentName';

const reducer = combineReducers({
  covidReducer,
  countryReducer,
  headingReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
