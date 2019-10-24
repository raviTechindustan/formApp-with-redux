import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Container, Col, Form, InputGroup, Button } from 'react-bootstrap'
const SignupForm = (props) => {
  const {
    user = {},
    onChange,
    signup,
    errors
  } = props;
  return (
    <Container fluid className="signup-page">
      <div className="maincontainer">
        <div className="inerdiv">
          <Row style={{ margin: 0 }}>
            <Col md={4} className="inerdivtwo">
              <p className="Welcome">Welcome Back!</p>
              <p className="para">To keep connection with us please login  with your personal info</p>
              <center>
                <Link to="/Login">Sign In</Link>
              </center>
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
              <Form onSubmit={signup}>
                <div className="wrapper-form my-5" >
                  <div className="form-ui">
                    <InputGroup className="auth-input">
                      <InputGroup.Prepend >
                        <InputGroup.Text id="basic-addon1" className="icon-pretend"><i class="fas fa-user-alt"></i></InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="text"
                        className="forms"
                        name="firstName"
                        value={user.firstName}
                        onChange={onChange}
                        placeholder="Name" />
                    </InputGroup>
                    <p className="error">{errors.firstName}</p>
                    <InputGroup className="auth-input">
                      <InputGroup.Prepend >
                        <InputGroup.Text id="basic-addon1" className="icon-pretend"><i class="fas fa-user-alt"></i></InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="text"
                        className="forms"
                        name="lastName"
                        value={user.lastName}
                        onChange={onChange}
                        placeholder="Last Name" />
                    </InputGroup>
                    <p className="error">{errors.lastName}</p>
                    <InputGroup className="auth-input">
                      <InputGroup.Prepend >
                        <InputGroup.Text id="basic-addon1" className="icon-pretend"><i class="fas fa-envelope-square"></i></InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="text"
                        className="forms"
                        name="email"
                        value={user.email}
                        onChange={onChange}
                        placeholder="Email" />
                    </InputGroup>
                    <p className="error">{errors.email}</p>
                    <InputGroup className="auth-input">
                      <InputGroup.Prepend >
                        <InputGroup.Text id="basic-addon1" className="icon-pretend"><i class="fas fa-unlock-alt"></i></InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="text"
                        className="forms"
                        name="password"
                        value={user.password}
                        onChange={onChange}
                        placeholder="Password" />
                    </InputGroup>
                    <p className="error">{errors.password}</p>
                    <InputGroup className="auth-input">
                      <InputGroup.Prepend >
                        <InputGroup.Text id="basic-addon1" className="icon-pretend"><i class="fas fa-unlock-alt"></i></InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="text"
                        className="forms"
                        name="confirmpassword"
                        value={user.confirmpassword}
                        onChange={onChange}
                        placeholder="Confirm Password" />
                    </InputGroup>
                    <p className="error">{errors.confirmpassword}</p>
                    <div className="text-center mt-5 ext-link signin">
                      <Button type="submit" className="custom-rounded">SIGN IN</Button>
                    </div>
                  </div>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default SignupForm;

