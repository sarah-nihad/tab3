import React,{Component} from 'react';
// import Si from './component/Si';
import Home from './component/Home';
import './App.css';
import Sitourism from './Tourism/Sitourism';

// import { Button } from 'react-bootstrap';
import Login from './component/Login';
import Sitab3 from './component/Sitab3'

import {BrowserRouter,Route , Switch} from 'react-router-dom';


class App extends Component{
render() {
  return (
    <BrowserRouter>
    <Route exact path ='/' component={Login } />
   <Route exact path ='/Home' component={Home } />
   
  

    <Switch>
    <Route path ='/Addres' component={Sitab3} />
    <Route path ='/Addaccount' component={Sitab3} />
     <Route path ='/Addtab3' component={Sitab3} />
    
     <Route path ='/Users' component={Sitab3} />
     <Route path ='/Resturant' component={Sitab3} />
    
    <Route path ='/Tourism' component={Sitourism} />
    <Route path ='/Usertourism' component={Sitourism} /> 


    
    </Switch> 
  
   
  
    </BrowserRouter>
  );
}
}
export default App;
