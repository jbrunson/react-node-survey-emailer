import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

// TODO
// Design improvements
// Delete action
// Survey text input and 'from' field for user
// Client side sorting
// Draft mode for survey creation

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path='/' component={Landing} />
						<Route exact path='/surveys' component={Dashboard} />
						<Route path='/surveys/new' component={SurveyNew} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
};

export default connect(null, actions)(App);
