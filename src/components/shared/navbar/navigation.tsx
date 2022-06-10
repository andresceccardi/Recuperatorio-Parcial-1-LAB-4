import { Nav, Navbar } from "react-bootstrap"
import './navigation.css';


function Navigation() {
    return (
        <>  
            <Navbar bg="navbar navbar-dark bg-success" expand="lg">
                <Navbar.Brand href="/"> Parcial 1 Laboratorio 4 2022 (REACT) </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/agenda">Agenda Contacto</Nav.Link>
                        <Nav.Link href="/tabla">Tabla agenda</Nav.Link>
                        <Nav.Link href="/formulario">Formulario agenda</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        
            
        </>
    );
}

export default Navigation;