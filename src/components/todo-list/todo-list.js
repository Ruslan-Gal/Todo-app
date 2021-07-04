import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({
  todos,
  onDeleted,
  onToggleImportant,
  onToggleDone,
  search,
}) => {
  let elements = [];
  if (search) {
    const reg = new RegExp(`${search}`, 'ig');
    const elems = todos.filter((el) => el.label.match(reg));
    elements = [...elems];
  } else {
    elements = [...todos];
  }

  // Array of JSX-elements
  // для каждого item создаем отдельный JSX - эл-т
  elements = elements.map((item) => {
    // console.log(item)

    const { id, ...itemProps } = item;

    return (
      <li key={id} className='list-group-item'>
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul className='list-group todo-list'>{elements}</ul>;
};

export default TodoList;
