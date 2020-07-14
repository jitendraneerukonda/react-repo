import React from 'react'

export default class States extends React.Component {
	constructor(props){
		super(props);
		this.state={
			name:"Jitendra"
		}
	}
	clickMe=()=>{
		this.setState(
			{
				name:"Jitendra Neerukonda"
			}
		)
	}
	render() {
		return (
			<div>
				<h1> Here we are using States</h1>
				<h2>{this.state.name}</h2>
				<button onClick={()=>
					this.clickMe()
				}>Click Me..!</button>
			</div>
		)
	}
}