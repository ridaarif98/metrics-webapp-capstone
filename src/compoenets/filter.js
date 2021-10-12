import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCountryData } from '../redux/country/country';
import { Link } from 'react-router-dom';

const FilterByCountry = () => {
  const disptach = useDispatch();

  const covidData = useSelector((state) => state.covidReducer);

  return (
    <form>
      <select
        onChange={(e) => disptach(loadCountryData(e.target.value, e.target.id))}
      >
        {covidData.map((data) => (
          <option value={data.country} key={data.confirmed} id={data.confirmed}>
            {data.country}
          </option>
        ))}
      </select>
      <button>
        <Link to="/country">Search</Link>
      </button>
    </form>
  );
};

export default FilterByCountry;
