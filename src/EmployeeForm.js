import React, {Component} from 'react';

class EmployeeForm extends Component {
	constructor(props) {
		super(props);

		this.initialState = {
			name : '',
			job : '',
			country : ''
		};

		this.state = this.initialState;
		this.handleInputChange = this.handleInputChange.bind(this);	
		this.submitForm = this.submitForm.bind(this);
	}
	
	
	
	handleInputChange (e) {
		const {name , value} = e.target;
	
		this.setState({
			[name] : value 
			//here [name] equals to input names like 'email', 'country', 'bio'
		});
	}
	
	submitForm (e) {
		this.props.handleFormSubmit(this.state);
		this.setState(this.initialState);
		e.preventDefault();
	}	

	render () { //
		return (
			<form  onSubmit={this.submitForm }> 
				<label> Employee Name : 
					<input type='text' name='name' value={this.state.name} onChange={this.handleInputChange} />
				</label>
				
				<label> country : 
					<select name='country' value={this.state.country} onChange={this.handleInputChange}>
						<option value='Nepal'> Nepal</option>
						<option value='India'> India</option>
						<option value='Bhutan'> Bhutan</option>
					</select>
				</label>
		
				<label> job : 
					<input type='text' name='job' value={this.state.job} onChange={this.handleInputChange}/>
				</label>

				<label> 
					<input type='submit' name='submit' value='submit' />
				</label>
			</form>
		);
	}
}

export default EmployeeForm;