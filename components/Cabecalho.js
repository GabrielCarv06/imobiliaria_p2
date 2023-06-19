import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiUserCircle } from "react-icons/bi";
import { BsHouseUpFill } from "react-icons/bs";


const Cabecalho = () => {
    return (
        <>
            <Navbar style={{backgroundColor: "#241178"}} variant="dark">
                <Container>
                    <Navbar.Brand href="/" className="me-5">Peres Imobiliárias</Navbar.Brand>
                    <Nav className="d-flex justify-content-center">
                        <Nav.Link variant="light" href="/comprar" className="me-3">Comprar</Nav.Link>
                        <Nav.Link variant="light" href="/alugar" className="me-3">Alugar</Nav.Link>
                        <Nav.Link variant="light" href="/venda" className="me-3">Vender</Nav.Link>
                        <Nav.Link variant="light" title="Cadastro de cliente" href="/clientes" className=""> <BiUserCircle size={"30px"} /> </Nav.Link>
                        <Nav.Link variant="light" title="Cadastro de vendedor" href="/vendedores" className=""> <BsHouseUpFill size={"25px"} /> </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Cabecalho