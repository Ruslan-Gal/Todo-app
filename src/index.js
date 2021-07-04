import React, { Component } from 'react';
import { render } from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter';
import ItemAddForm from './components/ItemAddForm';

import './common/styles/app.css';

class App extends Component {
  maxId = 100;

  state = {
    items: [
      this.createItem('Learn React'),
      this.createItem('Drink Coffee'),
      this.createItem('Make Awesome App'),
    ],
    filter: 'all', // all, active, done
    search: '',
  };

  onItemAdded = (label) => {
    this.setState((state) => {
      const item = this.createItem(label);
      return { items: [...state.items, item] };
    });
  };

  onItemDelete = (id) => {
    this.setState((state) => {
      const idx = state.items.findIndex((el) => el.id === id);

      const items = [
        ...state.items.slice(0, idx),
        ...state.items.slice(idx + 1),
      ];

      return { items };
    });
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const value = !oldItem[propName];

    const item = { ...oldItem, [propName]: value };

    return [...arr.slice(0, idx), item, ...arr.slice(idx + 1)];
  };

  onToggleImportant = (id) => {
    this.setState((state) => {
      const items = this.toggleProperty(state.items, id, 'important');
      return { items };
    });
  };

  onToggleDone = (id) => {
    this.setState((state) => {
      const items = this.toggleProperty(state.items, id, 'done');
      return { items };
    });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  onSearchChange = (search) => {
    this.setState({ search });
  };

  createItem(label) {
    return {
      id: ++this.maxId,
      label: label,
      important: false,
      done: false,
    };
  }

  filterItems(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  searchItems(items, search) {
    if (search.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  render() {
    const { items, search, filter } = this.state;

    const doneCount = items.filter((el) => el.done).length;
    const todoCount = items.length - doneCount;

    const visibleItems = this.filterItems(
      this.searchItems(items, search),
      filter
    );

    return (
      <div className='todo-app'>
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className='top-panel d-flex'>
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>

        <TodoList
          items={visibleItems}
          onItemDelete={this.onItemDelete}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

        <ItemAddForm onItemAdded={this.onItemAdded} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
