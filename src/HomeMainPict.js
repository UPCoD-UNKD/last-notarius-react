import React from 'react'
import download from './img/application.png'

import { makeStyles } from '@material-ui/core/styles';
import './style.css'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    contentH: {
        paddingTop: theme.spacing(70),
        fontSize: 30,
        textAlign: 'center'
    }
  }));

export default function HomeMainPict() {
    const classes = useStyles()
    return (
        <div id='bg'>
           <br/><br/><br/>
            <Typography className={classes.contentH}>
                Оберіть регіон
            </Typography><br/><br/><br/>
            <div style={{ display: 'flex', justifyContent: "space-around", flexWrap: 'wrap'}}>

            <div > <img src={download} alt="download"/> <span></span> </div>
            <div style={{width:"50%", height:"50%"}}></div>
            <div style={{ maxWidth: 250}}>
                <div style={{  height: 40, display: 'flex' }}>
                <p style={{fontSize: 24, fontWeight: 500}}>1230<span style={{fontSize: 16, fontWeight: 400}}>нотаріусів</span></p>
                </div>
                <div style={{  height: 40, display: 'flex' }}>
                <p style={{fontSize: 24, fontWeight: 500}}>3537<span style={{fontSize: 16, fontWeight: 400}}>нотаріальних дій</span></p>
                </div>
                <div style={{  height: 40, display: 'flex' }}>
                <p style={{fontSize: 24, fontWeight: 500}}>12<span style={{fontSize: 16, fontWeight: 400}}>найближчих до Вас нотаріусів</span></p>
                </div>
                
            </div>

            </div>
            
        </div>
    )
}
