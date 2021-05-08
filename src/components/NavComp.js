import { Navbar, Nav, Container } from 'react-bootstrap';

const NavComp = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid="md">
                <Navbar.Brand href="#home">Koronatutka</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">kartta</Nav.Link>
                        <Nav.Link href="#link">käyrä</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavComp