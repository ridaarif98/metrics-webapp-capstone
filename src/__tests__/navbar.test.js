import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../compoenets/navbar';

describe('Test to see that all objects render correctly.', () => {
  test('Check if Home renders.', () => {
    const tree = renderer
      .create(
        <Router>
          <NavBar />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
