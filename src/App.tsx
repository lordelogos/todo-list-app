import { useState } from "react";
import { ContextProvider } from "./components/context";
import CreateTodo from "./components/createTodo";
import TodoFilterAndCounter from "./components/todoFilterAndCounter";
import TodoHeader from "./components/todoHeader";
import TodoList from "./components/todoList";

function App() {
	const [activeFilter, setActiveFilter] = useState('')

	const clearTodos = () => {
		localStorage.clear();
		window.location.reload();
	}
	return (
		<ContextProvider>
			<div className="w-screen h-screen flex items-center justify-center bg-[#f2f2f2]">
				<button className="rounded-lg px-4 py-2 bg-black fixed top-5 right-5 text-white" onClick={clearTodos}>
					Clear Todos
				</button>
				<div className="w-[90%] h-[70%] sm:w-[500px] sm:h-[628px] rounded-[24px] sm:rounded-[40px] bg-white flex flex-col shadow-main">
					{/* date component */}
					<TodoHeader />
					{/* Task counter component and filter */}
					<TodoFilterAndCounter filter={activeFilter} setFilter={(_:string) =>setActiveFilter(_)} />
					{/* Todo list items */}
					<TodoList filter={activeFilter} />
					{/* create todo item component */}
					<CreateTodo />
				</div>
			</div>
		</ContextProvider>
	);
}

export default App;
