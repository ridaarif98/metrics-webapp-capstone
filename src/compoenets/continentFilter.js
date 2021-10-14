import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContinentData } from '../redux/continent/continent';
import { SetHeading } from '../redux/continentName/continentName';
import '../stylesheets/filter.css';

const FilterByContinent = () => {
  const disptach = useDispatch();
  const continents = ['Africa', 'Europe', 'Asia', 'America'];
  const filter = (e) => {
    disptach(filterContinentData(e.target.value));
    disptach(SetHeading(e.target.value));
  };

  return (
    <div className="formDiv">
      <h2>Stats By Country</h2>
      <form>
        <select onChange={filter}>
          <option>Search By Continent</option>
          {continents.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default FilterByContinent;
