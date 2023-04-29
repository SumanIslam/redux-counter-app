import { INCREMENT, DECREMENT, SET } from './actions';
import { CountActions } from './types/count/types';

export const initialState = { count: 0 };

export const CounterReducer = (state = initialState, action: CountActions) => {
	switch (action.type) {
		case INCREMENT:
			return { count: state.count + 1 };
		case DECREMENT:
			return { count: state.count - 1 };
		case SET:
			return { count: action.payload };
		default:
			return state;
	}
};
