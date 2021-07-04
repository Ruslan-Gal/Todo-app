import React, { Component } from 'react';

import './style.css';

export default class ItemAddForm extends Component {
  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <form className='bottom-panel d-flex' onSubmit={this.onSubmit}>
        <input
          type='text'
          className='form-control new-todo-label'
          onChange={this.onLabelChange}
          placeholder='What needs to be done?'
          value={this.state.label}
        />
        <button type='submit' className='btn btn-outline-secondary'>
          Add
        </button>
      </form>
    );
  }
}
