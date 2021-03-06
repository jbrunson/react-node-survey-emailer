import { reducer as reduxForm } from 'redux-form';
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

export default combineReducers({
	auth: authReducer,
	surveys: surveysReducer,
	form: reduxForm // Must be named form
});