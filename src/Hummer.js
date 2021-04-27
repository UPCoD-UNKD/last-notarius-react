import { Container } from '@material-ui/core'
import React from 'react'
import vesy from './img/vesy.png'
import shield from './img/shchit.png'
import sandCl from './img/4asy.png'
import phone from './img/phone.png'



export default function Hummer() {



    return (
        <div id='hummer'>
            
        <Container style={{ display: 'flex', justifyContent: "space-between", flexWrap: 'wrap'}}>
        <div style={{ width: 350, paddingTop: 70,  display: 'flex' }}>
                <img style={{ border: 'white', width: 100, height: 107}} src={vesy} alt="vesy"/>
                <div style={{ marginLeft: 15}}>
                <h4 style={{ color: 'white' }}>Запис на прийом</h4>
                <span style={{ color: 'wheat' }}>Запишіться до будь-якого <br/>  нотаріуса в зручний для вас час</span>
                </div>
            </div>

            <div style={{width: 350, paddingTop: 70,  display: 'flex' }}>
                <img style={{ width: 100, height: 107}} src={shield} alt="shield"/>
                <div style={{ marginLeft: 15}}>
                <h4 style={{ color: 'white' }}> Про послуги</h4>
                <span style={{ color: 'wheat' }}>Дізнайтесь інформацію щодо <br/> послуги, що Вас цікавить</span>
                </div>
            </div>
        </Container>

        <Container style={{ display: 'flex', justifyContent: "space-between", flexWrap: 'wrap'}}>
        <div style={{width: 350, paddingTop: 70, display: 'flex' }}>
                <img style={{ width: 100, height: 107}} src={sandCl} alt="sandCl"/>
                <div style={{ marginLeft: 15}}>
                <h4 style={{ color: 'white' }}>Пошук нотаріуса</h4>
                <span style={{ color: 'wheat' }}>Знайдіть на мапі найближчого<br/>  нотаріуса чи нотаріальну контору</span>
                </div>
            </div>

            <div style={{width: 350, paddingTop: 70,  display: 'flex' }}>
                <img style={{ width: 100, height: 107}} src={phone} alt="phone"/>
                <div style={{ marginLeft: 15}}>
                <h4 style={{ color: 'white' }}> Рейтинг нотаріусів</h4>
                <span style={{ color: 'wheat' }}>Залиште відгук про нотаріуса та<br/> оцініть якість обслуговування </span>
                </div>
            </div>
        </Container>
            
                
        </div>
    )
}