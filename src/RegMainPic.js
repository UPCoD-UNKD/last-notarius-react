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
        borderColor: 'grey',
        marginTop: "10px"
    }
}));

export default function RegMainPic() {
    const classes = useStyles()


    
    return (
        <div id='bg2'>

            <Typography className={classes.contentH}>
                Реєстрація нотаріуса
            </Typography><br />


            <Container >
                <Row className="justify-content-md-center">
                    
                    <Col md={{ span: 5, offset: 0 }}>
                    <div className={classes.form} id='notariusForm'>
                <Form>
                    <Form.Group controlId="formBasicLicense">
                        <Form.Label >Ваша ліцензія</Form.Label>
                        <Form.Control className={classes.input} type="text" />

                    </Form.Group><br/>
                    <Form.Group controlId="formBasicFio">
                        <Form.Label>Ваше ПІБ</Form.Label>
                        <Form.Control className={classes.input} id='FirstName' placeholder="Прізвище" type="text" />
                        <Form.Control className={classes.input} id='SecondName' placeholder="Iм'я" type="text" />
                        <Form.Control className={classes.input} id='ThirdName' placeholder="По-батькові" type="text" />

                    </Form.Group><br />

                    <Form.Group controlId="formBasicPhone">
                        <Form.Label>Ваш телефон</Form.Label>
                        <Form.Control className={classes.input} type="text" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Підтвердіть, будь-ласка, Вашу реєстрацію по e-mail</Form.Label>
                        <Form.Control className={classes.input} type="text" />
                    </Form.Group>

                    <Button className={classes.buttonReg} type="submit">
                         Зареєструватись
                    </Button>
                </Form>

                
            </div>

                    </Col>
                    
                </Row>

            </Container>


            

        </div>
    )
}
