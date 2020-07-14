import React from 'react';
import {Link} from 'react-router-dom';


export default function Education(props) {
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
                        <h2>Education Details:</h2>
                        <br/>
            <table className="table">
                 <thead>
                    <tr>
                        <th>Course</th>
                        <th>Name of the Institution</th>
                        <th>Year of Passing</th>
                        <th>Percentage</th>
                    </tr>
                 </thead>
                <tbody>
                    <tr>
                        <td>B.tech (C.S.E)</td>
                        <td>VVIT</td>
                        <td>2020</td>
                        <td>70</td>
                    </tr>
                    <tr>
                        <td>Intermediate</td>
                        <td>Bhashyam</td>
                        <td>2016</td>
                        <td>95</td>
                    </tr>
                    <tr>
                        <td>S.S.C</td>
                        <td>Bhashyam</td>
                        <td>2014</td>
                        <td>97</td>
                    </tr>
                </tbody>
            </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}