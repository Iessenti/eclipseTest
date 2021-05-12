import { createStore } from 'redux';

const initialState = {
	data: ''
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_STATE': 
			return {
				...state,
				data: action.value
			}

		default: return state

	}
}

const store = createStore(reducer);

export default store;