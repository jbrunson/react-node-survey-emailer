import { reducer as reduxForm } from 'redux-form';
import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
	auth: authReducer,
	form: reduxForm // Must be named form
});