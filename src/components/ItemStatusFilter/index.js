import React, { Component } from 'react';

import './style.css';

export default class ItemStatusFilter extends Component {
  state = {
    filter: 'all',
  };

  onFilterChange = (e, filter) => {
    this.setState({ filter });
    this.props.onFilterChange(filter);
    document.querySelectorAll('.btn-filter').forEach((btn) => {
      btn.classList.remove('btn-info');
      btn.classList.add('btn-outline-secondary');
    });
    e.target.classList.add('btn-info');
  };

  render() {
    return (
      <div className='btn-group'>
        <button
          type='button'
          className='btn btn-info btn-filter'
          onClick={(e) => this.onFilterChange(e, 'all')}
        >
          All
        </button>
        <button
          type='button'
          className='btn btn-outline-secondary btn-filter'
          onClick={(e) => this.onFilterChange(e, 'active')}
        >
          Active
        </button>
        <button
          type='button'
          className='btn btn-outline-secondary btn-filter'
          onClick={(e) => this.onFilterChange(e, 'done')}
        >
          Done
        </button>
      </div>
    );
  }
}
