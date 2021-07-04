import React from 'react';
import TodoListItem from '../TodoListItem';
import './style.css';

const TodoList = ({ items, onItemDelete, onToggleImportant, onToggleDone }) => {
  const elements = items.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className='list-group-item'>
        <TodoListItem
          {...itemProps}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
          onItemDelete={() => onItemDelete(id)}
        />
      </li>
    );
  });

  return <ul className='list-group todo-list'>{elements}</ul>;
};

export default TodoList;
