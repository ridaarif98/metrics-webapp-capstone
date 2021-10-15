import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import CountryDislay from '../compoenets/country';

describe('Test to see that all objects render correctly.', () => {
  test('Check if Continent renders.', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <CountryDislay />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
