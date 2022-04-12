//@ts-ignore
import InputIcon from "../assets/input.svg";
import { FormEvent, KeyboardEventHandler, useState } from "react";
import { UseAppContext } from "./context";
import { Types } from "./reducer";

const CreateTodo = () => {
	const { state, dispatch } = UseAppContext();
	const [content, setContent] = useState("");
	const [colorFilter, setColorFilter] = useState("green");

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch({
			type: Types.AddTodo,
			payload: {
				id: Date.now(),
				content: content,
				completed: false,
				colorFilter: colorFilter,
			},
		});
		setContent("");
		setColorFilter("green");
	};

	return (
		<form
			className="px-[15px] sm:px-[30px] border-t-[0.5px]"
			onSubmit={handleSubmit}>
			<div className="flex flex-row items-center py-5">
				<img
					src={InputIcon}
					alt="input icon"
					className="h-4 w-4 sm:h-6 sm:w-6"
				/>
				<input
					type="text"
					required
					placeholder="Add a task"
					className="mx-2 sm:mx-3 text-xl placeholder:text-[#B3B3B3] border-none w-full focus:ring-[#f5f5f5]"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				{/* color filters */}
				<input
					type="checkbox"
					checked={colorFilter === "green"}
					onChange={() => setColorFilter("green")}
					className="w-[24px] h-[24px] rounded-lg sm:w-[32px] sm:h-[32px] sm:rounded-xl bg-display-green mr-2 cursor-pointer border-none focus:border-display-blue checked:bg-none checked:bg-display-green focus:ring-0 focus:ring-offset-0 checked:focus:ring-[#f5f5f5] checked:focus:ring-[3px] checked:ring-[#f5f5f5] checked:ring-[3px] checked:hover:bg-display-green checked:focus:bg-display-green"
				/>
				<input
					type="checkbox"
					checked={colorFilter === "purple"}
					onChange={() => setColorFilter("purple")}
					className="w-[24px] h-[24px] rounded-lg sm:w-[32px] sm:h-[32px] sm:rounded-xl bg-display-purple  cursor-pointer border-none focus:border-display-blue checked:bg-none checked:bg-display-purple focus:ring-0 focus:ring-offset-0 checked:focus:ring-[#f5f5f5] checked:focus:ring-[3px] checked:ring-[#f5f5f5] checked:ring-[3px] checked:hover:bg-display-purple checked:focus:bg-display-purple"
				/>
			</div>
		</form>
	);
};

export default CreateTodo;
