import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import image from '../images/europe.png';
import '../stylesheets/country.css';

const CountryDislay = () => {
  const dispatch = useDispatch();
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
            <li>
              <p>{data.name}</p>
              <div>
                <span> {data.confirmed} cases</span>
                <i class="fa fa-arrow-circle-o-right"></i>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryDislay;
