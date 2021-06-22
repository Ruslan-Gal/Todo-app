import React from 'react'
import TodoListItem from './todo-list-item'

const TodoList = ({ todos }) => {

	// Array of JSX-elements
	// для каждого item создаем отдельный JSX - эл-т
	const elements = todos.map((item) => {
		// console.log(item)
		return (
			<li>
				{/* <TodoListItem
					label={item.label}
					important={item.important} /> */}

				{/* equal */}
				<TodoListItem {...item} />

			</li>
		);

	});

	return (
		<ul>
			{elements}
		</ul>
	);
};

export default TodoList;