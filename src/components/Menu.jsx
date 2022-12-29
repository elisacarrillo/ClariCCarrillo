import Container from 'react-bootstrap/Container';
// import {Nav} from 'react-bootstrap/Nav';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import {Navbar} from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem'

import NavDropdown from 'react-bootstrap/NavDropdown'
// import MenuItem from 'react-bootstrap/DropdownMenu'
import './Menu.css'

function MenuComponent() {
  return (
//     <Navbar bg="dark" variant="dark">
//     <Container>
//       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//       <Nav className="me-auto">
//         <Nav.Link href="#home">Home</Nav.Link>
//         <Nav.Link href="#features">Features</Nav.Link>
//         <Nav.Link href="#pricing">Pricing</Nav.Link>
//       </Nav>
//     </Container>
//   </Navbar>
<Navbar className="color-nav" expand="lg" sticky='top'>

  <Navbar.Brand href="#home" className='spacing'>Clarisa Carrillo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/about">About Me</Nav.Link>
      <Nav.Link href="/mywork">My Work</Nav.Link>
      <Nav.Link href="/contact">Contact Me</Nav.Link>
  
    </Nav>
  </Navbar.Collapse>

</Navbar>
  );
}
export default MenuComponent;
