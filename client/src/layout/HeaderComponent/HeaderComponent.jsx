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
            <header className="container py-3">
                <Navbar expand="lg" className="">
                    <Navbar.Brand href="/">Colocataires</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav">
                            <Nav.Link href="/" style={{ display: (!this.props.user ? '' : 'none') }}>Home</Nav.Link>
                            <Nav.Link href="/" style={{ display: (this.props.user ? '' : 'none') }}>Dashboard</Nav.Link>
                            <Nav.Link href="/colocataires" style={{ display: (this.props.user ? '' : 'none') }}>Mes Colloc's</Nav.Link>
                            <Nav.Link href="/depenses" style={{ display: (this.props.user ? '' : 'none') }}>Dépense réguliés</Nav.Link>
                            <Nav.Link href="/transactions" style={{ display: (this.props.user ? '' : 'none') }}>Règlements</Nav.Link>
                            <Nav.Link href="/signup" style={{ display: (!this.props.user ? '' : 'none') }}>Créer un compte</Nav.Link>
                            <Nav.Link href="/signin" style={{ display: (!this.props.user ? '' : 'none') }}>Se connecter</Nav.Link>
                            <Nav.Link onClick={() => this.props.logout()} style={{ display: (this.props.user ? '' : 'none') }}>
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
