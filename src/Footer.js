import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Container, Typography} from '@material-ui/core';
import { Link } from '@material-ui/core';
import './style.css'
import { Facebook } from '@material-ui/icons';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import logoFooter from './img/logoFooter.png'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      minHeight: 70,
      backgroundColor: '#333333',
      color: 'white'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    root1: {
      flexGrow: 4,
      verticalAlign: 'middle'
    },
    root2: {
        flexGrow: 2,
        '& > * + *': {
            marginLeft: theme.spacing(2),
          },
      }
    
  }));
  
  export default function NaviBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Container style={{ display: 'flex', justifyContent: "space-between", flexWrap: 'wrap'}}>
            <div style={{ paddingTop: 10,  display: 'flex' }}>
            <Typography variant="h6" className={classes.title}>
            <Link href='./App.js'><img src={logoFooter} alt="logoFooter"/></Link>
            </Typography>
            </div>
            <div style={{ paddingTop: 25,  display: 'flex' }}>
            <Typography className={classes.root1}>
              Усі права захищені
            </Typography>
            </div>
            <div style={{ paddingTop: 25,  display: 'flex' }}>
            <Typography className={classes.root2}>
              <span>Підписуйтесь на нас у соцмережах</span>
             <Link><Facebook style={{ color: 'white' }}/></Link>   
             <Link><TwitterIcon style={{ color: 'white' }}/></Link> 
             <Link><TelegramIcon style={{ color: 'white' }}/></Link> 
             <Link><InstagramIcon style={{ color: 'white' }}/></Link>
            </Typography>
            </div>
            
            
            
           </Container>
        
      </div>
    );
  }