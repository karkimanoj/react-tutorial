import React, { Component } from 'react';

import UserTable from './UserTable';
import Clock from './Clock';
import Calculator from './Calculator';
import SignupMars from './SignupMars';

class App extends Component {

  	render() {

	    return (
	    	<div className='full-container'> 
	    		<div className='small-container'>
					<h1>1. A table and form example with component and props and state </h1>
					<UserTable />
	    			
	    		</div>
	  
	    	
	    		<hr/>
	    		<div className='small-container'>
					<h1>2. states and lifecycle hooks and event handling by displaying Clock </h1>
	    			<Clock />
	    		</div>	   
				<div className='small-container'>
					<h1>3. Temperature Conversion 
					<i><small> ( handling events like click,change,etc )</small></i></h1>
	    			<Calculator />
	    		</div>
	    		<div className='small-container'>
					<h1>4. Containment example <i><small> : passing children elements to inner components 
					 props.children</small></i></h1>
	    			<SignupMars />
	    		</div>
	    	</div>
	    	/* passing characters json variable as characterData property to table component */
	    );
  	}
}

export default App;
