import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DisplayData = () => {
  const disptach = useDispatch();
  const covidData = useSelector((state) => state.covidReducer);
  console.log(covidData);

  return (
    <div>
      <ul>
        {covidData.map((data) => (
          <li>
            {data.confirmed}
            <p>{data.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;
