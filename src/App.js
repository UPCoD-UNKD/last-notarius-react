import React from 'react'
import NavBar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './HomePage'
import PageForNotary from './PageForNotary'
import RegPage from './RegPage'
import LogInPage from './LogInPage'

export default function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/PageForNotary" component={PageForNotary}/>
         
         
              
      </Switch>
      <Switch>
          <Route  path ="/RegPage" component={RegPage}/>  
          <Route  path ="/LogInPage" component={LogInPage}/>   
      </Switch>
    </Router>
    </>
      
    
  )
}
