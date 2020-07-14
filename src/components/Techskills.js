import React from 'react';
import {Link} from 'react-router-dom';


export default function Techskills(props) {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(data=>console.log(data))
    return (
        <div className="navigation">
            
             <nav>
                <h1 className="brand">
                    <a href="/">HOME</a>
                    </h1>
            </nav>
         <div className="row justify-content-center">
           
             <div className="col-lg-8 m-2 data-card">
                <div className="card">
                    <div className="card-body">
                        <div className="">
                        <h2 className="blink">Technical Skills:</h2>
                        <ul>
                        <h4>Web Development:</h4>
                        <h6>HTML,CSS,Bootstrap,React Js</h6>
                        <h4>Databases:</h4>
                        <h6> MYSQL</h6>
                        <h4>Operating Systems:</h4>
                        <h6>Linux,Ubuntu,Windows</h6>
                    </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}