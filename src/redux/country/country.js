const FETCH_COUNTRY_DATA = 'metric-webapp-capstone/country/FETCH_COUNTRY_DATA';
const initialState = [];
export const loadCountryData =
  (countryValue, countryConfirm) => async (dispatch) => {
    const covidGet = await fetch(
      `https://covid-api.mmediagroup.fr/v1/cases/?country=${countryValue}`
    );
    const covidList = await covidGet.json();
    const twons = [countryValue, countryConfirm];
    for (const key in covidList) {
      if (key !== 'All') {
        const newTwon = {
          name: key,
          confirmed: covidList[key].confirmed,
        };
        twons.push(newTwon);
      }
    }
    dispatch({
      type: FETCH_COUNTRY_DATA,
      payload: twons,
    });
  };

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_DATA:
      return [...action.payload];
    default:
      return state;
  }
};

export default countryReducer;
