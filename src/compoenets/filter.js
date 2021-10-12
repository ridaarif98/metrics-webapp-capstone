import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadCountryData } from '../redux/country/country';
import '../stylesheets/filter.css';

const FilterByCountry = () => {
  const disptach = useDispatch();

  const covidData = useSelector((state) => state.covidReducer);

  return (
    <div className="formDiv">
      <h2>Stats By Country</h2>
      <form>
        <select
          onChange={(e) => disptach(loadCountryData(e.target.value, e.target.id))}
        >
          {covidData.map((data) => (
            <option
              value={data.country}
              key={data.confirmed}
              id={data.confirmed}
            >
              {data.country}
            </option>
          ))}
        </select>
        <button type="button">
          <Link to="/country" className="formLink">
            <i className="fa fa-search" />
            Search
          </Link>
        </button>
      </form>
    </div>
  );
};

export default FilterByCountry;
