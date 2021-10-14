import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import DisplayData from '../compoenets/continent';

describe('Test to see that all objects render correctly.', () => {
  test('Check if Continent renders.', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <DisplayData />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
