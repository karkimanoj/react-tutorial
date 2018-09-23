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
	            <td> <button onClick={ ()=> props.removeCharacter(index) }> Delete </button> </td>
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
class Table extends Component{

	render(){
		
		const {characterData, removeCharacter} = this.props;
		//console.log(characterData);

		return(
			<table>
               <TableHead/>
               <TableBody characterData={characterData} removeCharacter={removeCharacter}/> 
            </table>
	    );
	}
}

export default Table;