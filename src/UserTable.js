import React, {Component} from 'react';
import Table from './Table';
import EmployeeForm from './EmployeeForm';

class UserTable extends Component {
	
	constructor (props){
		super(props);
		this.state = {
			characters : [
				{
					name : 'Pawal Adhikari',
					job : 'senior s/w engineer',
					country : 'Nepal'
				},
				{
					name : 'Nischal Shrestha',
					job : 'junior s/w engineer',
					country : 'Nepal'
				},
				{
					name : 'Rajesh Mahato',
					job : 'React Developer',
					country : 'Nepal'
				}

	  		]
		};

		this.removeCharacter = this.removeCharacter.bind(this);

		this.handleFormSubmit = this.handleFormSubmit.bind(this);

	}
	
	

	handleFormSubmit(employee) {
		//alert('form submission works. '+employee.name);
		
		this.setState( state => {
			return {
			characters : [...state.characters, employee]
			} ; 
		});
		
	}

	removeCharacter (index) {
		//const index = 2;
		const {characters} = this.state;

		this.setState({
			characters : characters.filter((character, i) => {
				return (i !== index);
			})
		});
	}

	render () {
		return (
			<div className='container'>
				<Table characters={this.state.characters} removeCharacter={this.removeCharacter}/>
				<EmployeeForm  handleFormSubmit={this.handleFormSubmit}/>
			</div>
		);
	}
}

export default UserTable;