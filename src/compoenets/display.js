import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../stylesheets/display.css';
import { Link } from 'react-router-dom';
import image from '../images/europe.png';
import { loadCountryData } from '../redux/country/country';
import FilterByCountry from './filter';

const DisplayData = () => {
  const disptach = useDispatch();
  const covidData = useSelector((state) => state.covidReducer);
  const headingData = useSelector((state) => state.headingReducer);

  return (
    <div>
      <div className="HeadingDiv">
        <img src={image} alt="Europe" />
        <h1>
          {headingData.length === 0 ? <p>Europe</p> : <p>{headingData}</p>}
        </h1>
      </div>
      <div>
        <FilterByCountry />
        {covidData.length === 0 ? (
          <p className="nodata">There is no data of this continent</p>
        ) : (
          <ul className="covidList">
            {covidData.map((data) => (
              <li
                key={data.confirmed}
                // onClick={() => disptach(loadCountryData(data.country, data.confirmed))}
              >
                <img src={image} alt="Europe" />
                <Link to="/country" className="link">
                  <button
                    type="button"
                    onClick={() => disptach(loadCountryData(data.country, data.confirmed))}
                  >
                    <i className="fa fa-arrow-right" />
                  </button>
                  <p key={data.country}>{data.country}</p>
                  <span>{data.confirmed}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DisplayData;
