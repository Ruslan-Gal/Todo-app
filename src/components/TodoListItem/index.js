import React from 'react';
import './style.css';

const TodoListItem = ({
  label,
  important,
  done,
  onToggleImportant,
  onToggleDone,
  onItemDelete,
}) => {
  let classNames = 'todo-list-item';

  if (important) {
    classNames += ' important';
  }

  if (done) {
    classNames += ' done';
  }

  return (
    <span className={classNames}>
      <span className='todo-list-item-label' onClick={onToggleDone}>
        {label}
      </span>

      <button
        type='button'
        className='btn btn-outline-success btn-sm float-right'
        onClick={onToggleImportant}>
        <i className='fa fa-exclamation' />
      </button>

      <button
        type='button'
        className='btn btn-outline-danger btn-sm float-right'
        onClick={onItemDelete}>
        <i className='fa fa-trash-o' />
      </button>
    </span>
  );
};

export default TodoListItem;
