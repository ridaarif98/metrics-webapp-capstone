import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import DisplayData from './compoenets/continent';
import CovidDataRender from './compoenets/renderContinent';
import CountryDislay from './compoenets/country';
import store from './redux/configureStore';
import NavBar from './compoenets/navbar';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Provider store={store}>
          <Route exact path="/metrics-webapp-capstone/">
            <CovidDataRender />
            <DisplayData />
          </Route>
          <Route path="/metrics-webapp-capstone/country">
            <CountryDislay />
          </Route>
        </Provider>
      </Switch>
    </>
  );
}

export default App;
