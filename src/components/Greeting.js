import React from 'react';

let Greeting=(props)=>{
	console.log(props);
	return(
		<div>
			<h1>This is {props.name} & my mail is {props.mail}</h1>
			{props.children}
		</div>
	);
}

export default Greeting;