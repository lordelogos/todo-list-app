import { ChangeEventHandler, useState } from "react";
import { UseAppContext } from "./context";
import { Types } from "./reducer";

const TodoItem = ({
	id,
	content,
	completed,
	colorFilter,
}: {
	id: number;
	content: string;
	completed: boolean;
	colorFilter: string;
}) => {
	const { state, dispatch } = UseAppContext();
	const [checked, setChecked] = useState(completed);

	const toggleCompleted = () => {
		setChecked(!completed);
		dispatch({
			type: Types.UpdateTodo,
			payload: {
				id: id,
				completed: !completed,
			},
		});
	};

	return (
		<div
			className="w-full px-[15px] sm:px-[30px] h-[84px] min-h-[84px] flex flex-row items-center border-t-[0.5px] border-[#d8d8d8]"
			onClick={() => toggleCompleted()}>
			{/* checkbox */}
			<input
				type="checkbox"
				checked={checked}
				readOnly
				className="bg-[#f2f4f9] w-5 h-5 sm:w-8 sm:h-8 rounded-full border-2 border-display-blue checked:border-display-blue checked:border-2 checked:bg-display-blue active:bg-display-blue indeterminate:bg-display-blue checked:focus:bg-display-blue checked:focus:border-display-blue checked:hover:bg-display-blue checked:bg-[length:65%_65%] checked:bg-checkbox mr-3 sm:mr-4"
			/>
			{/* todo item name */}
			<p className="text-xl text-display-text">{content}</p>
			{/* filter */}
			<span
				className={`w-[18px] h-[18px] rounded-[6.75px] ${
					colorFilter === "green" ? "bg-display-green" : "bg-display-purple"
				} mr-0 ml-auto`}></span>
		</div>
	);
};

export default TodoItem;
