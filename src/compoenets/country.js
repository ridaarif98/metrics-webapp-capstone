import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCountryData } from '../redux/country/country';

const CountryDislay = () => {
  const dispatch = useDispatch();
  const covidData = useSelector((state) => state.countryReducer);

  useEffect(() => {
    dispatch(loadCountryData());
  }, []);

  return (
    <div>
      <ul>
        {covidData.map((data) => (
          <li>
            {data.name}
            {data.confirmed}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryDislay;
