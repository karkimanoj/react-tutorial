import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
  render() {
  	const characters = [
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

  	];

    return (
    	<div className='container'> 
    		<h1> A table example with component and props </h1>
    		 <Table characterData={characters} />

    	</div>
    	/* passing characters json variable as characterData property to table component */
    );
  }
}

export default App;
