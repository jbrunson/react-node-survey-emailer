import { FETCH_USER } from '../actions/types';

// const INITIAL_STATE = {
// 	requesting: false,
// 	user: null
// };

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;
			// return Object.assign({}, { user: action.payload });

		default:
			return state;
	}
}