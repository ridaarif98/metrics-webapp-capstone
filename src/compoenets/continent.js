import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../stylesheets/display.css';
import { Link } from 'react-router-dom';
import image from '../images/3d-world-map-png-2.png';
import virusImg from '../images/coronavirus.png';
import { loadCountryData } from '../redux/country/country';
import FilterByContinent from './continentFilter';

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
        <FilterByContinent />
        {covidData.length === 0 ? (
          <p className="nodata">There is no data of this continent</p>
        ) : (
          <ul className="covidList">
            {covidData.map((data) => (
              <li
                key={data.confirmed}
                // onClick={() => disptach(loadCountryData(data.country, data.confirmed))}
              >
                <img src={virusImg} alt="Europe" />
                <Link to="/country" className="link">
                  <button
                    type="button"
                    onClick={() =>
                      disptach(loadCountryData(data.country, data.confirmed))
                    }
                  >
                    <i className="fa fa-arrow-right" />
                  </button>
                </Link>
                <p key={data.country}>{data.country}</p>
                <span>{data.confirmed}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DisplayData;
