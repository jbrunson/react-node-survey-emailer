import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return <li><a href="/auth/google">Login With Google</a></li>;
			default:
				return [
					<li key={0}><Payments /></li>,
					<li style={{ margin: '0 10px' }} key={1}>Credits: {this.props.auth.credits}</li>,
					<li key={2}><a href="/api/logout">Logout</a></li>
					]
		}
	}

	render() {
		const homeLink = this.props.auth ? '/surveys' : '/';

		return (
			<nav>
		    <div className="nav-wrapper" style={{backgroundColor: '#95A5A6'}}>
		      <Link to={homeLink} className="left brand-logo">Emaily</Link>
		      <ul id="nav-mobile" className="right">
		      	{this.renderContent()}
		      </ul>
		    </div>
		  </nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
