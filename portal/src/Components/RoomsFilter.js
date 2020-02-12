import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  // react hooks
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    wifi
  } = context;

  // get unique types
  let types = getUnique(rooms, 'type');
  // add all
  types = ['all', ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <TextField
            name="search"
            id="search"
            variant="outlined"
            placeholder="Search Your Hotel"
            fullWidth
            // value={search}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" style={{ color: '#F50057' }}>
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </div>
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* guests  */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>
        {/* end of guests */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price &#8377;{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price*/}

        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="wifi"
              id="wifi"
              checked={wifi}
              onChange={handleChange}
            />
            <label htmlFor="wifi">wifi</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
