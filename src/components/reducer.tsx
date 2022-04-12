export interface Todo {
	id: number;
	content: string;
	completed: boolean;
	colorFilter: string;
}

export type initialStateType = Todo[];

export const initialState: initialStateType =
	JSON.parse(localStorage.getItem("todos")!) || [];

type ActionMap<M extends { [index: string]: any }> = {
	[Key in keyof M]: M[Key] extends undefined
		? {
				type: Key;
		  }
		: {
				type: Key;
				payload: M[Key];
		  };
};

export enum Types {
	AddTodo = "ADD_TODO",
	DeleteTodo = "DELETE_TODO",
	UpdateTodo = "UPDATE_TODO",
}

type TodoPayload = {
	[Types.AddTodo]: {
		id: number;
		content: string;
		completed: boolean;
		colorFilter: string;
	};
	[Types.DeleteTodo]: {
		id: number;
	};
	[Types.UpdateTodo]: {
		id: number;
		completed: boolean;
	};
};

export type TodoActions = ActionMap<TodoPayload>[keyof ActionMap<TodoPayload>];

const reducer = (
	state: initialStateType,
	action: TodoActions
): initialStateType => {
	switch (action.type) {
		case Types.AddTodo:
			console.log('creating a todo...')
			localStorage.setItem("todos", JSON.stringify([action.payload, ...state]));
			return [action.payload, ...state];

		case Types.DeleteTodo:
			const newTodos = state.filter((i) => i.id === action.payload.id);
			localStorage.setItem("todos", JSON.stringify(newTodos));
			return newTodos;

		case Types.UpdateTodo:
			console.log("update todo is running");
			const updatedTodos = state.map((i: Todo) => {
				if (i.id === action.payload.id) {
					i.completed = action.payload.completed;
				}
				return i;
			});
			console.log(updatedTodos);
			localStorage.setItem("todos", JSON.stringify(updatedTodos));
			return updatedTodos;

		default:
			return state;
	}
};

export default reducer;
