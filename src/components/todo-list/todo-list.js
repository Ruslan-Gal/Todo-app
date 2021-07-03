import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

import ItemAddForm from '../item-add-form';

const TodoList = ({ todos, onDeleted }) => {

	// Array of JSX-elements
	// для каждого item создаем отдельный JSX - эл-т
	const elements = todos.map((item) => {
		// console.log(item)

		const { id, ...itemProps } = item;

		return (
			<li key={id} className='list-group-item'>
				<TodoListItem {...itemProps}
					onDeleted={() => onDeleted(id)}
				/>
			</li>
		);
	});

	return (
		<ul className='list-group todo-list'>
			{elements}
		</ul>

	);
};

export default TodoList;