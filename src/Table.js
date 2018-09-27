import React , {Component} from 'react';

//TableHead simple component using array function
const TableHead = () => {
	return (
 		<thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
		);
}

//TaleBody Simple component using array function
const TableBody = (props) => {

	const {characterData} = props;
	const rows = characterData.map(function(row, index){
		return(
			<tr key={index} >
	            <td> {row.name} </td>
	            <td> <i>{row.job} </i></td>
	             <td> {row.country} </td>
	            <td> <button onClick={(e) =>  props.removeCharacter(index, e) }> Delete </button> </td>
	        </tr>
        );
	});
	
	return (
		<tbody>
   			{rows}
        </tbody>
	);
}

//table class component
class Table extends Component {
		
	

	render(){
		
		//const {characterData, removeCharacter} = this.props;
		
		return(
			<table>
               <TableHead/>
               <TableBody characterData={ this.props.characters } removeCharacter = {this.props.removeCharacter}/> 
            </table>
	    );
	}
}

export default Table;