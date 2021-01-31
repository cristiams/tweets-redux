// no tiene fichero css por tanto no hacemos carpeta

import React from 'react';
import {Container, Navbar, Button} from "react-bootstrap";
import Logo from "../assets/img/redux.png";

export default function Menu() {

  return (

    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img alt="Tweets simulator redux" src={Logo} width="30" height="30" className="d-inline-block aling-top mr-4"/>
          Tweets simulator Redux
        </Navbar.Brand>
        <Button variant="outline-success">
          Nuevo Tweet
        </Button>
      </Container>
    </Navbar>
  )
}