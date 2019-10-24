import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  state = {  }
  render() { 
    return (
      <div>
        This is the main component
        <br />
        <br />
        <br />
        <br />
        <Link to="/login">Login</Link>
        <br />
        <br />
        <Link to="/signup">Signup</Link>
      </div>
    );
  }
}
 
export default Main;