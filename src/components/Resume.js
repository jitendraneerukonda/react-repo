import React from 'react';
import data from "../data/data.json";
import emojiuser from '../data/emojiuser.svg';
import {Link} from 'react-router-dom';

export default function Resume(props) {
	fetch("https://jsonplaceholder.typicode.com/posts")
	.then(res=>res.json())
	.then(data=>console.log(data))

	let info=data.profiles[props.location.profilesData.i]
	console.log(info.basic)

	return (
    <div className="navigation">
      <nav class="navbar navbar-expand-sm bg-light">
        <ul>
          <Link to={{pathname:'/'}} className="inner">Home</Link>
          <Link to={{pathname:'/career'}} className="inner">Career</Link>
          <Link to={{pathname:'/education'}} className="inner">Education</Link>
          <Link to={{pathname:'/tech'}} className="inner">Technical Skills</Link>
          <Link to={{pathname:'/cert'}} className="inner">Certification</Link>
        </ul>
      </nav> 
      <h2>Please Click on the navigation Buttons to see my details</h2>   
    </div>
    
	)
}