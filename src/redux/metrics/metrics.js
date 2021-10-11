const FETCH_COVID_DATA = 'metric-webapp-capstone/metrics/FETCH_COVID_DATA';
const initialState = [];

export const loadAPIData = () => async (dispatch) => {
  const covidGet = await fetch(
    'https://covid-api.mmediagroup.fr/v1/cases/?continent=europe'
  );
  const covidList = await covidGet.json();
  const covidData = Object.values(covidList).map((country) => country.All);
  const countries = covidData.map((acase) => ({
    confirmed: acase.confirmed,
    country: acase.country,
  }));
  dispatch({
    type: FETCH_COVID_DATA,
    payload: countries,
  });
};
const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COVID_DATA:
      return [...action.payload];
    default:
      return state;
  }
};

export default covidReducer;
