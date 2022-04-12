import { UseAppContext } from "./context";
import TodoItem from "./todoListItem";

const TodoList = ({filter}:{filter:string}) => {
	const { state } = UseAppContext();
	return (
		<div className="w-full flex flex-col h-max max-h-[350px] overflow-auto" data-testid='todolist-component'>
			{/* Todo list item */}
			{state.map((todo) => {
				if (filter === "") {
					return (
						<TodoItem
							key={todo.id}
							colorFilter={todo.colorFilter}
							content={todo.content}
							completed={todo.completed}
							id={todo.id}
						/>
					);
				} else {
					if (todo.colorFilter === filter) {
						return (
							<TodoItem
								key={todo.id}
								colorFilter={todo.colorFilter}
								content={todo.content}
								completed={todo.completed}
								id={todo.id}
							/>
						);
					}
				}
			})}
		</div>
	);
};

export default TodoList;
