import React from 'react';
import {Link} from 'react-router-dom';


export default function Cert(props) {
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
                <div className="card ">
                    <div className="card-body">
                  <h2>Certifications:</h2>
                            <h4>Web Development using React Js from Apssdc</h4>
                            <h4>Android certification from Apssdc</h4>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}