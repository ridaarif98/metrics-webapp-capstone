import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../stylesheets/display.css';
import image from '../images/europe.png';

const DisplayData = () => {
  const disptach = useDispatch();
  const covidData = useSelector((state) => state.covidReducer);
  return (
    <div>
      <div className="HeadingDiv">
        <img src={image} alt="Europe" />
        <h1>Europe</h1>
      </div>
      <ul className="covidList">
        {covidData.map((data) => (
          <li>
            <p>{data.country}</p>
            <span> {data.confirmed}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;
