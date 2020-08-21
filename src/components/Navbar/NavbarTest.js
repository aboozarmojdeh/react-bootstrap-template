import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Navbartest = () => {
  return (


    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Web You Web</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#Home1">Home1</Nav.Link>
          <Nav.Link href="#Home2">Home2</Nav.Link>
          <Nav.Link href="#Home3">Home3</Nav.Link>
          <Nav.Link href="#Home4">Home4</Nav.Link>
          <Nav.Link href="#Home5">Home5</Nav.Link>
          <Nav.Link href="#Home6">Home6</Nav.Link>
          <Nav.Link href="#Home7">Home7</Nav.Link>
          <Nav.Link href="#Home8">Home8</Nav.Link>
          <Nav.Link href="#Home9">Home9</Nav.Link>
          <Nav.Link href="#Home10">Home10</Nav.Link>
          <Nav.Link href="#Home11">Home11</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>


  )
};

export default Navbartest;