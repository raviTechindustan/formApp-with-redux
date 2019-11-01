import React from 'react';
import { Row, Container, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import { ToastContainer, toast } from 'react-toastify';

const ForgotPasswordForm = (props) => {
  const {
    onSubmit,
    onChange,
    user = {}
  } = props;



  return (
    <Container fluid className="signup-page">
      <div className="maincontainer">
        <div className="inerdiv">
          <Row style={{ margin: 0 }}>
            <Col md={4} className="inerdivtwo">
              <p className="Welcome">Welcome Back!</p>
            
              <center>
                <Link to="/Signup">Sign Up</Link>
              </center>
            </Col>
            <Col md={8} className="seconddiv">
              <p className="account">Reset Password</p>
              <div>
                <ul class="social-network social-circle">
                  <center>
                    <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#" class="icoGoogle" title="Google +"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                  </center>
                </ul>
              </div>
              <Form onSubmit={onSubmit}>
                <div className="wrapper-form my-5">
                  <div className="form-ui">
                    <InputGroup className="auth-input">
                      <InputGroup.Prepend >
                        <InputGroup.Text id="basic-addon1" className="icon-pretend"><i class="fas fa-unlock-alt"></i></InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="password"
                        className="forms"
                        name="password"
                        value={user.password}
                        onChange={onChange}
                        placeholder="Password" />
                    </InputGroup>
                    <InputGroup className="auth-input">
                      <InputGroup.Prepend >
                        <InputGroup.Text id="basic-addon1" className="icon-pretend"><i class="fas fa-unlock-alt"></i></InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="password"
                        className="forms"
                        name="confirmpassword"
                        value={user.confirmpassword}
                        onChange={onChange}
                        placeholder="Confirm Password" />
                    </InputGroup>
                    
                    <div className="text-center mt-5 ext-link">
                      <Button type="submit" className="custom-rounded">Click</Button>
                    </div>
                  </div>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </div>

    </Container>
  )
}

export default ForgotPasswordForm;