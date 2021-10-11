import { Provider } from 'react-redux';
import DisplayData from './compoenets/display';
import CovidDataRender from './compoenets/renderData';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <CovidDataRender />
      <DisplayData />
    </Provider>
  );
}

export default App;
