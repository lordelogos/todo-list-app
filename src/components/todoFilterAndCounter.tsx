import { UseAppContext } from "./context"

const TodoFilterAndCounter = ({filter, setFilter}:{filter:string, setFilter:(filter:string) => void}) => {
	const {state} = UseAppContext()

	const toggleFilter = (_:string) => {
		if (filter === _){
			setFilter('')
		}else{
			setFilter(_)
		}
	}

    return (
        <div className="w-full h-[80px] flex flex-row items-center justify-between px-[15px] sm:px-[30px] bg-[#F9F9F9]" data-testid='counter-filter-component'>
						{filter === ''? (
							<p className="text-lg sm:text-xl text-display-orange font-medium">
							Showing {state.length} {state.length === 1 ? 'task': 'tasks'}
							</p>
						): (
							<p className="text-xl text-display-orange font-medium">
							Filtering and showing {state.filter(i => i.colorFilter === filter).length} {state.filter(i => i.colorFilter === filter).length === 1 ? 'task': 'tasks'}
							</p>
						)}
						<div className="flex flex-row items-center">
							<span className={`w-[24px] h-[24px] rounded-lg sm:w-[32px] sm:h-[32px] sm:rounded-xl bg-display-green mr-2 cursor-pointer ${filter === 'green' && 'ring-[#dedede] ring-[3px]'}`} onClick={() => toggleFilter('green')} data-testid='green-filter-btn'></span>
							<span className={`w-[24px] h-[24px] rounded-lg sm:w-[32px] sm:h-[32px] sm:rounded-xl bg-display-purple cursor-pointer ${filter === 'purple' && 'ring-[#dedede] ring-[3px]'}`} onClick={() => toggleFilter('purple')} data-testid='purple-filter-btn'></span>
						</div>
					</div>
    )
}

export default TodoFilterAndCounter