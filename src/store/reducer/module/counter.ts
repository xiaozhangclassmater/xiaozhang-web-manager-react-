import { counterState } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		count: 0
	} as counterState,
	reducers: {
		decremented(state) {
			state.count++
		}
	}
})
export const { decremented } = counterSlice.actions
export default counterSlice.reducer
