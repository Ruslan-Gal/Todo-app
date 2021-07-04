import React from 'react';
import './search-panel.css';

const SearchPanel = ({ onSearchLabel, value }) => {
  return (
    <input
      type='text'
      className='form-control search-input'
      placeholder='type to search'
      onChange={onSearchLabel}
      value={value}
    />
  );
};

export default SearchPanel;
