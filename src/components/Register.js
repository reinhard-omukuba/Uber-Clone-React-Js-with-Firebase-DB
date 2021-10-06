import React, {useRef} from 'react'
import {Container, Form, Button, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {Link, useHistory} from 'react-router-dom';
import {auth, mydDb} from '../firebase'

function Register() {

    //getting text from text input
    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();
    let history = useHistory();

    function RegisterUser(){

       auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            mydDb.collection("Users").add({
                fullname: usernameRef.current.value,
                email: emailRef.current.value,
                userId: user.uid
            }); 


            console.log(user);
 
            
            history.push("/dashboard");
            

          })
          .catch((error) => {
              
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorMessage);

            //show the alert box

            //display error message inside alert box

          });


    }


    return (
        <div className="mainRegister">
            <div className="divOpacity"></div>

            <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <Card className="mainCard">
                    <Card.Body>
                        <h2 className="signUpTitle">Register</h2>

                        <Form>
                            <Form.Group>
                                <Form.Label>Enter your Name</Form.Label>
                                <Form.Control type="text" ref={usernameRef}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Enter your Email</Form.Label>
                                <Form.Control type="email" ref={emailRef}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Enter your password</Form.Label>
                                <Form.Control type="password" ref={passwordRef}></Form.Control>
                                
                            </Form.Group>

                            <Button  onClick={RegisterUser} className="w-100">Register an Account</Button>




                        </Form>
                    </Card.Body>

                    <Link to="/">
                        <p className="footerText">Already have an Account? Login</p>
                    </Link>
                </Card>
            </Container>
            
        </div>
    );
}

export default Register;