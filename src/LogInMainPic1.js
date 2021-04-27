import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './style.css'
import { Typography } from '@material-ui/core';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const useStyles = makeStyles((theme) => ({
    contentH: {
        paddingTop: theme.spacing(70),
        fontSize: 30,
        textAlign: 'center'
    },
    
    

    button: {
        width: "100%",
        backgroundColor: "#d7af9b",
        borderColor: '#d7af9b',
        borderRadius: "20px"
    },
    buttonReg:{
        width: "100%",
        backgroundColor: "#d7af9b",
        borderColor: '#d7af9b',
        borderRadius: "20px",
        marginTop: "50px"
    },
    input: {
        height: "30px",
        backgroundColor: "transparent",
        borderColor: 'grey'
    }
}));

export default function LogInMainPic1() {

    

    const classes = useStyles()
    return (
        <div id='bg1'>
      
      
            <Typography className={classes.contentH}>
                Вхід для нотаріуса
            </Typography><br />


            <Container >
                <Row className="justify-content-md-center">
                    
                    <Col md={{ span: 5, offset: 0 }}>
                    <div className={classes.form} id='notariusForm'>
                <Form>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Label >Ваш телефон</Form.Label>
                        <Form.Control className={classes.input} type="text" />

                    </Form.Group><br />
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Адреса</Form.Label>
                        <Form.Control className={classes.input} type="email" />
                    </Form.Group><br />

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control className={classes.input} type="password" />
                    </Form.Group><br />

                    <Button className={classes.button} type="submit">
                        Вхід
                    </Button>
                </Form>
                    
                
                
            </div>

                    </Col>
                    
                </Row>

            </Container>


        </div>
    )
}
