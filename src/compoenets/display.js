import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../stylesheets/display.css';
import image from '../images/europe.png';
import { Link } from 'react-router-dom';
import { loadCountryData } from '../redux/country/country';
import FilterByCountry from './filter';

const DisplayData = () => {
  const disptach = useDispatch();
  const covidData = useSelector((state) => state.covidReducer);

  return (
    <div>
      <div className="HeadingDiv">
        <img src={image} alt="Europe" />
        <h1>Europe</h1>
      </div>
      <div>
        <FilterByCountry />

        <ul className="covidList">
          {covidData.map((data) => (
            <li>
              <img src={image} alt="Europe" />
              <Link to="/country" className="link">
                <i
                  class="fa fa-arrow-right"
                  onClick={() =>
                    disptach(loadCountryData(data.country, data.confirmed))
                  }
                ></i>
                <p
                  key={data.country}
                  onClick={() =>
                    disptach(loadCountryData(data.country, data.confirmed))
                  }
                >
                  {data.country}
                </p>
                <span> {data.confirmed}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DisplayData;
