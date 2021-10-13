const FETCH_HEADING = 'metric-webapp-capstone/continent/FETCH_HEADING';
const initialState = [];
export const SetHeading = (heading) => ({
  type: FETCH_HEADING,
  payload: heading,
});

const headingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HEADING:
      return [...action.payload];
    default:
      return state;
  }
};

export default headingReducer;
