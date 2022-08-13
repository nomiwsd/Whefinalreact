import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import  "./Header.css"
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <img src="./logo1.png"   alt="wait for internet"
              width="50px"
              height="auto"/>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto navbars">
          <Nav.Link href="/"><Link to='/'>Home</Link></Nav.Link>
          <Nav.Link href="#"><Link to='About_main'>About</Link></Nav.Link>
          <Nav.Link href="#"><Link to='Benefits_main'>Benefits</Link></Nav.Link>
          <Nav.Link href="#"><Link to='Collection_main'>Collection</Link></Nav.Link>
          <Nav.Link href="#"><Link to='Roadmap_main'>Roadmap</Link></Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#"> <Link to='Mint_main'>
            <button type="button" className="btn1 btn-outline mt-2">Mint</button> 
           </Link></Nav.Link>
          <Nav.Link eventKey={2} href="/No Wallet">
          <a  className="nav-link px-0" ><button type="button" className="btn1 btn-outline">No Wallet</button></a>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   
    
  )
}

export default Header