import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import icon from "../../assests/icon.png";

const imgIcon = {
  width: "45px",
  marginRight: "10px"
};

const NavBar = props => {
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
      <Nav.Link href="/">Login</Nav.Link>
      <Nav.Link href="/">Sign up</Nav.Link>
    </Navbar>
  );
};

export default NavBar;
