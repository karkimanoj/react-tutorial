import React, { Component } from 'react';

class Clock extends Component 
{
	constructor (props){
		super(props);
		this.state = {
			date : new Date(),
			isToggleOn : true
		};
		this.hadleClick1 = this.hadleClick1.bind(this);
	}
	
	timer () {
		this.time1 = setInterval(  () => {
			this.setState({ date : new Date() });
		}, 1000);
	}

	componentDidMount (){
		this.timer();
	}

	componentWillUnmount(){
		clearInterval(this.time1);
	}

	hadleClick1 (e) {
		//console.log(e.target);
		this.state.isToggleOn ?   clearInterval(this.time1) : this.timer() ;
	

		this.setState(state => ({
			isToggleOn : !state.isToggleOn
			})
		);

		
	}

	render() {
		return(
			<div> 
				<button onClick = { this.hadleClick1 } > {this.state.isToggleOn ? 'STOP' : 'START' } </button>
				<h1 className ='text-center'> {this.state.date.toLocaleTimeString()} </h1>
				
			</div>
		);
	}
}

export default Clock;