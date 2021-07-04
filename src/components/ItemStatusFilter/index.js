import React from 'react';
import './style.css';

const ItemStatusFilter = ({ filter, onFilterChange = () => {} }) => {
  const filterButtons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = filter === name;
    const classNames =
      'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');
    return (
      <button
        type='button'
        className={classNames}
        key={name}
        onClick={() => onFilterChange(name)}>
        {label}
      </button>
    );
  });

  return <div className='btn-group'>{buttons}</div>;
};

export default ItemStatusFilter;
