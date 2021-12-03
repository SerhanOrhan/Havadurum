import React from 'react';
import { Col, Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbarmenu(props) {

  const { home, contact, search } = props;
  return (
    <Navbar bg="light" variant="light">
      <Container >
        <Col className="header-menu">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/icons/logo.svg"
              width="25"
              height="25"
              className="navbar-logo"
            />{' '}
          </Navbar.Brand>
          <Navbar.Brand href="/">{home}</Navbar.Brand>
          <Col>
            <Navbar.Brand href="/search">{search}</Navbar.Brand>
          </Col>
          <Col>
            <Navbar.Brand href="https://github.com/SerhanOrhan">{contact}</Navbar.Brand>
          </Col>
        </Col>
      </Container>
    </Navbar>









  );
}




export default Navbarmenu;