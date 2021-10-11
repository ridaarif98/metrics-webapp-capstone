const FETCH_COVID_DATA = 'metric-webapp-capstone/metrics/FETCH_COVID_DATA';
// const FETCH_COUNTRY_DATA = 'metric-webapp-capstone/metrics/FETCH_COUNTRY_DATA';
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

// export const loadCountryData = () => async (dispatch) => {
//   const covidGet = await fetch(
//     'https://covid-api.mmediagroup.fr/v1/cases/?country=Germany'
//   );
//   const covidList = await covidGet.json();
//   const twons = [];
//   for (const key in covidList) {
//     if (key !== 'All') {
//       const newTwon = {
//         name: key,
//         confirmed: covidList[key].confirmed,
//       };
//       twons.push(newTwon);
//     }
//   }
//   dispatch({
//     type: FETCH_COUNTRY_DATA,
//     payload: twons,
//   });
// };

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COVID_DATA:
      return [...action.payload];
    default:
      return state;
  }
};

export default covidReducer;
