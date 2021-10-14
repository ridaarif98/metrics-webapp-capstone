import countryReducer from '../redux/country/country';
import covidReducer from '../redux/continent/continent';

const mockStore = {
  covidCountries: [
    {
      name: 'Germany',
      confirmed: '8997',
    },
  ],
};

describe('Test data and country reducer', () => {
  test('Return the inital state of country reducer', () => {
    expect(countryReducer(undefined, {})).toEqual([]);
  });

  test('Reducer test with mockstore', () => {
    const FETCH_COUNTRY_DATA =
      'metric-webapp-capstone/country/FETCH_COUNTRY_DATA';
    const store = mockStore;
    const action = {
      type: FETCH_COUNTRY_DATA,
      payload: [
        {
          name: 'Milan',
          confirmed: '234567',
        },
      ],
    };
    expect(countryReducer(store.covidCountries, action)).toEqual([
      {
        name: 'Milan',
        confirmed: '234567',
      },
    ]);
  });
});

describe('Covid Reducer tests', () => {
  test('Return the inital state of country reducer', () => {
    expect(covidReducer(undefined, {})).toEqual([]);
  });

  test('Reducer test with mockstore', () => {
    const FETCH_COVID_DATA =
      'metric-webapp-capstone/continent/FETCH_COVID_DATA';
    const store = mockStore;
    const action = {
      type: FETCH_COVID_DATA,
      payload: [
        {
          country: 'Italy',
          confirmed: '234567',
        },
      ],
    };
    expect(covidReducer(store.covidCountries, action)).toEqual([
      {
        country: 'Italy',
        confirmed: '234567',
      },
    ]);
  });
});
