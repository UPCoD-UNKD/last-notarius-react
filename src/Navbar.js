
import './style.css'
import logo from './img/logo.png'

import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,  Navbar} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


const stylesPath = makeStyles((theme) =>({

root:{
  flexGrow: 1,
},
root1: {
  
  '& > * + *': {
    marginLeft: theme.spacing(6),
  },
},
  
  

}))

export default function NavBar() {

  const classes = stylesPath()

  return (
    <div >
     <>
             <Navbar className={classes.root} collapseOnSelect expand="lg" id='navbar'>
                <Navbar.Brand className={classes.title} href="/"><img src={logo} alt='logo'/></Navbar.Brand>
                <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse bg="light" variant="light" id="responsive-navbar-nav">
                    <Nav className='my-lg-0' className={classes.root1} >
                    <Nav.Link ><Link to='/' id="navLink" >Головна</Link></Nav.Link>
                    <Nav.Link ><Link to='' id="navLink" >Для громадян</Link></Nav.Link> 
                    <Nav.Link ><Link to='/PageForNotary' id="navLink">Для нотаріусів</Link></Nav.Link> 
                    <Nav.Link ><Link  to='' id="navLink">Нотаріальні діяння</Link></Nav.Link>  
                   </Nav>
                </Navbar.Collapse>
            </Navbar>
              
      </>
      
    </div>
  );
}