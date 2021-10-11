import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import covidReducer from './metrics/metrics';

const reducer = combineReducers({
  covidReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
