import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CountryDislay = () => {
  const dispatch = useDispatch();
  const covidData = useSelector((state) => state.countryReducer);
  return (
    <div>
      <h2>
        {covidData[0]}
        {covidData[1]}
      </h2>
      {covidData.length === 2 ? (
        <p>There is no data</p>
      ) : (
        <p>
          {covidData.map((data) => (
            <p>
              {data.name}
              {data.confirmed}
            </p>
          ))}
        </p>
      )}
    </div>
  );
};

export default CountryDislay;
