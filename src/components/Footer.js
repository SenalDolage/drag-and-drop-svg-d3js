import React from "react";
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <footer className="page-footer bg-primary">
      <Container>
        <div className="footer-copyright text-center text-white py-2">
          © {new Date().getFullYear()}
        </div>
      </Container>
    </footer>
  );
}
