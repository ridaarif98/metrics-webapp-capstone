import { Provider } from 'react-redux';
import DisplayData from './compoenets/display';
import CovidDataRender from './compoenets/renderData';
import CountryDislay from './compoenets/country';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <CountryDislay />
      <CovidDataRender />
      <DisplayData />
    </Provider>
  );
}

export default App;
