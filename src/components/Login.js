import React, {useRef} from 'react'
import {Container, Form, Button, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {auth} from '../firebase'

import {Link, useHistory} from 'react-router-dom';

function Login() {

    //getting text from text input
    const emailRef = useRef();
    const passwordRef = useRef();

    let history = useHistory();

    //register user
    function loginUser(){

        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // redirect user to dashboard
            history.push("/dashboard");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            //show the alert box

            //display error message inside alert box
          });

    }


    return (
        <div className="mainLogin">
            <div className="divOpacity"></div>
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
            <Card className="mainCard">
                <Card.Body>
                    <h2 className="signUpTitle">Login</h2>

                    <Form>
                        <Form.Group>
                            <Form.Label>Enter your Email</Form.Label>
                            <Form.Control type="email" ref={emailRef}></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Enter your Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef}></Form.Control>
                        </Form.Group>

                        <Button  onClick={loginUser} className="w-100">Login</Button>

                      
                    </Form>
                </Card.Body>

                <Link to="/register">
                    <p className="footerText">Dont Have an Account? Sign Up</p>
                </Link>
                
            </Card>
            
        </Container>

        

    </div>
    );
}

export default Login;