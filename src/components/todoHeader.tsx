const TodoHeader = () => {
	const date= new Date(Date.now())
    return (
        <div className="w-full h-[13%] sm:h-[86px] flex items-center justify-center bg-display-orange rounded-t-[24px] sm:rounded-t-[40px]">
					<p className="w-max text-lg sm:text-xl text-white font-medium" data-testid='date-component'>
						Today, {date.toDateString()}
					</p>
				</div>
    )
}

export default TodoHeader;