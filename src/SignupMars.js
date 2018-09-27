import React, {Component} from 'react';

function FancyBorder (props) {
	return (
		<div className='FancyBorder FancyBorder-blue'>
			{props.children}
		</div>
	);
}

const Dialog = (props) => {
	return (
		<FancyBorder>
			<h1 className='Dialog-title'> Mars Exploration Program </h1>
			<p className='Dialog-message'>
				How should we refer to you ? 
			</p>
			{props.children}
		</FancyBorder>
	);
}

class SignupMars extends Component {
	constructor (props) {
		super(props);
		this.state={login : ''};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSignup = this.handleSignup.bind(this);
	}
	
	handleInputChange (e) {
		this.setState({
			login : e.target.value
		});
	}

	handleSignup () {
		alert('you signed up for Mars!');
	}

	render () {
		return (
			<Dialog>
				<input type='text' value = {this.state.login} onChange={this.handleInputChange}/>
				<button onClick={this.handleSignup}> SignMe Up! </button>
			</Dialog>
		);
	}
}

export default SignupMars;