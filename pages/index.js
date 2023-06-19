import Cabecalho from '@/components/Cabecalho'
import Link from 'next/link'
import { Card, Col, Container, Row } from 'react-bootstrap'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css';

export default function Home() {

  return (
    <>
      <Cabecalho />
      <Container >


        <h1 className='text-center mt-5 mb-5'>
          Escolha a melhor opção para você!
        </h1>

        <Row md={3}>
          <Col>
            <Card className="text-center">
              <Card.Header className='text-white' style={{ backgroundColor: "#241178" }}>Venda</Card.Header>
              <Card.Body>
                <Card.Title>Se você quer vender um imóvel!</Card.Title>
                <Link className="btn btn-danger" href={'/venda/form'}>Clique aqui!</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <Card.Header className='text-white' style={{ backgroundColor: "#241178" }}>Alugar</Card.Header>
              <Card.Body>
                <Card.Title>Se você quer colocar um imóvel para alugar!</Card.Title>
                <Link className="btn btn-danger" href={'/alugar/form'}>Clique aqui</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <Card.Header className='text-white' style={{ backgroundColor: "#241178" }}>Comprar</Card.Header>
              <Card.Body>
                <Card.Title>Se você quer comprar um imóvel</Card.Title>
                <Link className="btn btn-danger" href={'/comprar/form'}>Clique aqui</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>  
      </Container>

 
    </>
  )
}
