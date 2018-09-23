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
		
		const {characterData} = this.props;
		//console.log(characterData);

		return(
			<table>
               <TableHead/>
               <TableBody characterData={characterData} /> 
            </table>
	    );
	}
}

export default Table;