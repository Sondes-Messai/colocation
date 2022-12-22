import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
class HeaderComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <header className="container py-3 mb-3 border-bottom">
        <Navbar expand="lg" className="">
          <Navbar.Brand href="/">Colocataires</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/colocataires">Mes Colloc's</Nav.Link>
              <Nav.Link href="/depenses">Dépense réguliés</Nav.Link>
              <Nav.Link href="/transactions">Règlements</Nav.Link>
              <Nav.Link href="/signup">signup</Nav.Link>
              <Nav.Link onClick={() => this.props.logout()}>
                Déconnection
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}

export default HeaderComponent
