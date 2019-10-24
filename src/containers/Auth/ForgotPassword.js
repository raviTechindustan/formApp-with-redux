import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Row, Container, Col, Form, InputGroup } from 'react-bootstrap'

export class ForgotPassword extends Component {
  render() {
    return (
      <div>
        <Container fluid className="signup-page">
          <div className="maincontainer">
            <div className="inerdiv">
              <Row style={{ margin: 0 }}>
                <Col md={4} className="inerdivtwo">
                  <p className="Welcome">Welcome Back!</p>
                  <p className="para">To keep connection with us please login  with your personal info</p>
                  <center><Link to="/Signup"><button className="button">Sign Up</button></Link></center>
                </Col>
                <Col md={8} className="seconddiv">
                  <p className="account">Create Account</p>
                  <div>
                    <ul class="social-network social-circle">
                      <center>
                        <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#" class="icoGoogle" title="Google +"><i class="fa fa-google-plus"></i></a></li>
                        <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                      </center>
                    </ul>
                  </div>
                  <p className="useemail">or use your email for registration :</p>
                  <Form  >
                    <center>
                      <div>
                        <InputGroup className="auth-input">
                          <InputGroup.Prepend >
                            <InputGroup.Text id="basic-addon1" className="icon-pretend"><i class="fas fa-user-alt"></i></InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control type="text" className="forms" name="email" placeholder="Email" />
                        </InputGroup>
                      </div>
                    </center>
                  </Form>
                  <center>
                    <Button className="primaryy"  >Click</Button>
                  </center>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default ForgotPassword
