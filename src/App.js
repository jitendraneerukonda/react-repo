import React from 'react';
import emojiuser from './data/emojiuser.svg';
import './App.css';
import data from "./data/data.json";
import Resume from "./components/Resume";
import Career from './components/Career';
import Education from './components/Education';
import Techskills from './components/Techskills';
import Cert from './components/Cert';
import {BrowserRouter,Route, Link} from 'react-router-dom';

function App() {
  return(
    <div className = "App">
      <Home />
      <BrowserRouter>
        <Route exact path ="/" component={Home}/>
        <Route path ="/resume" component={Resume}/>
        <Route exact path='/career' component={Career} />
        <Route exact path='/education' component={Education} />
        <Route exact path='/tech' component={Techskills} />
        <Route exact path='/cert' component={Cert} />
      </BrowserRouter>
    </div> 
  );
}

let Home=()=>{
  let profile=data.profiles;
  console.log(profile);

  return(
    <div className="row justify-content-center">
      {
        profile.map((value,index)=>(
          <div className="col-sm-10 col-md-4 col-lg-4 mt-1" key={index}>
              <div className="card" >
                <div className="card-body">
                  <img src={emojiuser} style={{width:"200px"}}/>
                  <h2>{value.basic.name}</h2>
                  <h2>{value.basic.role}</h2>
                  <h2>{value.basic.phone}</h2>
                  <h2>{value.basic.email}</h2>

                  <Link to={{pathname:"/resume", profilesData:{i:index}}} className="btn btn-primary">Profile</Link>

                </div>

              </div>
          </div>
          ))
      }
    </div>
  );
}

export default App;
