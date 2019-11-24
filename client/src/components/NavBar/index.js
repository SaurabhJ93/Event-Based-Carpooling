import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import icon from "../../assests/icon.png";
import Signup from "../SignupModal";

const imgIcon = {
  width: "45px",
  marginRight: "10px"
};

const NavBar = props => {

  const [showSignup, setShowSignup] = useState(false);

  const handleSubmit = () => {
    console.log('Closing modal');
    setShowSignup(false);
  };

  const handleShow = () => setShowSignup(true);

  const handleLogout = () => {
    localStorage.clear(); //for localStorage
    sessionStorage.clear(); //for sessionStorage
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/" className="ml-lg-5 w-25">
        <img src={icon} style={imgIcon} alt="Site logo" />
        Event Based Carpool
      </Navbar.Brand>

      <Form inline className="w-50">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 w-75"
        />
        <Button variant="outline-light">Search</Button>
      </Form>
      <Nav.Link href="/">Home</Nav.Link>
      { localStorage.usertoken ? 
        [
        <Nav.Link key="Logout" href="/" onClick={handleLogout} >Logout</Nav.Link>, 
        <Nav.Link key="Account" href="/user" >Account</Nav.Link>
        ]  :  [
        <Nav.Link key="Login" href="/Login" >Login </Nav.Link>, 
        <Button key="Signup" variant="outline-light" onClick={handleShow}>
        Signup
        </Button>, 
        <Signup key="Signupmodal" show={showSignup} onSubmit = {handleSubmit}/>
        ]
      }
    </Navbar>
  );
};

export default NavBar;
