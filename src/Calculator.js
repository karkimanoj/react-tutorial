import React, {Component} from 'react';

const scales = {
	c : 'celsius',
	f : 'fahrenheit'
}

const toCelsius = fahrenheit =>  (fahrenheit - 32)*5/9 ;

const toFahrenheit = celsius => (celsius * 9/5) +32 ;

const tryConvert = (tempr ,convert) => {
	const input = parseFloat(tempr);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const BoilingVerdict = (props) => {
	if (props.tempr === '')
		return null;
	return ( props.tempr > 100 ? 'The water will boil' : 'The water will not boil' );
}

class TemprInput extends Component {
	
	render () {

		const {tempr, scale, temprInputChange} = this.props;
		return ( 
				<fieldset>
					<legend> Enter Temperature in {scales[scale]}</legend> 
					<input type='text'  value={tempr}  onChange={(e) => temprInputChange(e, scale)}/> 
				</fieldset>	
		);
	}
	
}

class Calculator extends Component {

	constructor (props) {
		super(props);
		this.state = {
			scale : 'c',
			tempr : ''
		};
		//console.log(this.state);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange (e, scale) {
		this.setState({
			scale : scale,
			tempr : e.target.value
		});
	
	}

	render (){
		const {scale, tempr} = this.state;
		const celsius = scale === 'c' ? tempr : tryConvert(tempr, toCelsius);
		const fahrenheit = scale === 'f' ? tempr : tryConvert(tempr, toFahrenheit);
		return (
			<form>
				  
				
					<TemprInput  tempr={celsius} scale='c' temprInputChange={this.handleChange} />
				
					<TemprInput tempr={fahrenheit} scale='f' temprInputChange={this.handleChange}/>
					<BoilingVerdict tempr={celsius} />
			
			</form>
		);
	}
}

export default Calculator;

