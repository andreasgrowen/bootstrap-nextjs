import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

function Header(){
    return (
        
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Container>
            <Navbar.Brand href="#home">NextJs + Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav ms-auto" >
                <Nav.Link href="/#learn">What you'll Learn</Nav.Link>
                <Nav.Link href="/#FAQ">FAQ</Nav.Link>
                <Nav.Link href="/#Instructors">Instructors</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/#learn">What you'll Learn</NavDropdown.Item>
                <NavDropdown.Item href="/#FAQ">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="/#Instructors">Instructors</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="inside">Go inside the Game</NavDropdown.Item>
                <NavDropdown.Item href="othernav">Go to the sidenav page</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
       
    )
}

export default Header
