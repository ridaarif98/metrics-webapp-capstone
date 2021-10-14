import { React } from 'react';
import { useSelector } from 'react-redux';
import image from '../images/3d-world-map-png-2.png';
import '../stylesheets/country.css';

const CountryDislay = () => {
  const covidData = useSelector((state) => state.countryReducer);
  return (
    <div className="countryData">
      <div className="countryHeader">
        <img src={image} alt="Europe" />
        <div className="heading">
          <h2>{covidData[0]}</h2>
          <span>{covidData[1]}</span>
        </div>
      </div>
      <h1 className="cityHeading">CITY/ TOWN BREAKDOWN</h1>
      {covidData.length === 2 ? (
        <p className="conditional">
          There is no city/regions details for this country
        </p>
      ) : (
        <ul className="countryDetail">
          {covidData.slice(2).map((data) => (
            <li key={data.name}>
              <p>{data.name}</p>
              <div>
                <span>
                  {data.confirmed}
                  cases
                </span>
                <i className="fa fa-arrow-circle-o-right" />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryDislay;
