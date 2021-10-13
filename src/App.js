import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import DisplayData from './compoenets/display';
import CovidDataRender from './compoenets/renderData';
import CountryDislay from './compoenets/country';
import store from './redux/configureStore';
import NavBar from './compoenets/navbar';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Provider store={store}>
          <Route exact path="/">
            <CovidDataRender />
            <DisplayData />
          </Route>
          <Route path="/country">
            <CountryDislay />
          </Route>
        </Provider>
      </Switch>
    </>
  );
}

export default App;
