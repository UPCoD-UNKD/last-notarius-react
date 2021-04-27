import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './style.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import {
    Link
  } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    

    buttonReg:{
        width: "350px",
        backgroundColor: "#d7af9b",
        borderColor: '#d7af9b',
        borderRadius: "20px",
        marginTop: "50px",
        minHeight: "50px" 
    }
}));

export default function LogInMainPic() {

    const classes = useStyles()
    return (
        <div id='bg3' style={{paddingTop: "12%"}}>
              <Container style={{ width: '60%', display: 'flex', justifyContent: "space-between", flexWrap: 'wrap'}}>
                       <Link to='/RegPage'><Button className={classes.buttonReg}>Зареєструватись</Button></Link>
                       <Link to='/LogInPage'><Button className={classes.buttonReg}>Увійти</Button></Link>
               </Container>       
            </div>


       
    )
}
