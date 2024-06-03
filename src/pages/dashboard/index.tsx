import { decremented } from '@/store/action'
import { counterState } from '@/types'
import { getStateData } from '@/utils'
import { useDispatch, useSelector } from 'react-redux'
export default function DashBoard() {
	const counterState = useSelector((state)=> getStateData(state, 'counter') as counterState)
	const dispatch = useDispatch()
	const handleClick = ()=> {
		dispatch(decremented())
	}
	return (
    <div>
      <div className="content">{counterState.count}</div>
      <button onClick={handleClick}>counter++</button>
    </div>
	)
}
