import React, { Component } from 'react';
import './style.css';

export default class SearchPanel extends Component {
  state = {
    term: '',
  };

  onTermChange = (e) => {
    const { onSearchChange = () => {} } = this.props;
    const term = e.target.value;
    this.setState({ term });

    onSearchChange(term);
  };

  render() {
    return (
      <input
        type='text'
        className='form-control search-input'
        placeholder='type to search'
        value={this.state.term}
        onChange={this.onTermChange}
      />
    );
  }
}
