import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Svg Drag & Drop with D3.js</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}
