import React, { Component } from 'react';
import Table from './Table';

class App extends Component {

	constructor (props){
		super(props);
		this.state = {
			characters : [
				{
					name : 'Pawal Adhikari',
					job : 'senior s/w engineer'
				},
				{
					name : 'Nischal Shrestha',
					job : 'junior s/w engineer'
				},
				{
					name : 'Rajesh Mahato',
					job : 'React Developer'
				},
				{
					name : 'Sudip Pohrel',
					job : 'Front-End developer'
				}

	  		]
		};
	}
	
	removeCharacter = (index) => {
		const {characters} = this.state;

		this.setState({
			characters : characters.filter((character, i) => {
				return (i !== index);
			})
		});
	}

  	render() {

	    return (
	    	<div className='container'> 
	    		<h1> A table example with component and props and state </h1>
	    		 <Table characterData={ this.state.characters } removeCharacter = {this.removeCharacter}/>

	    	</div>
	    	/* passing characters json variable as characterData property to table component */
	    );
  	}
}

export default App;
