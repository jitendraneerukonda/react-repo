import React from 'react'

export default class Welcome extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<h1>my name is {this.props.name} and my clg name is  {this.props.college}</h1>
				{this.props.children}
			</div>
		)
	}
}