const FETCH_COVID_DATA = 'metric-webapp-capstone/metrics/FETCH_COVID_DATA';
const FETCH_CONTINENT_DATA = 'metric-webapp-capstone/metrics/FETCH_CONTINENT_DATA';
const initialState = [];

export const loadAPIData = () => async (dispatch) => {
  const covidGet = await fetch('https://covid-api.mmediagroup.fr/v1/cases/?continent=europe');
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

export const filterContinentData = (continent) => async (dispatch) => {
  const covidGet = await fetch(`https://covid-api.mmediagroup.fr/v1/cases/?continent=${continent}`);
  const covidList = await covidGet.json();

  const covidData = Object.values(covidList).map((country) => country.All);
  const countries = covidData.map((acase) => ({
    confirmed: acase.confirmed,
    country: acase.country,
  }));
  dispatch({
    type: FETCH_CONTINENT_DATA,
    payload: countries,
  });
};

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COVID_DATA:
      return [...action.payload];
    case FETCH_CONTINENT_DATA:
      return [...action.payload];
    default:
      return state;
  }
};

export default covidReducer;
