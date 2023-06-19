import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Cabecalho from '@/components/Cabecalho'
import { Container, Table } from 'react-bootstrap'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css';

const Venda = () => {

  const [venda, setVenda] = useState([])

  useEffect(() => {
      setVenda(getAll())
  }, [])

  function getAll() {
      return JSON.parse(window.localStorage.getItem('venda')) || []
  }

  function excluir(id) {
    if (confirm('Deseja excluir o cliente?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('venda', JSON.stringify(itens))
      setVenda(itens)
   }
}

const Map = dynamic(
    () => import('@/components/Mapa'), 
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false 
    }
  )

  return (
    <>
   
    <Cabecalho />

    <Container>
    <h2 className='text-center mt-5'>Imóveis cadastrados</h2>
    <Link href={'venda/form'} className='btn btn-danger mb-5 mt-5'>Cadastrar novo imóvel</Link>
    <Table bordered hover variant="dark">
                <thead>
                    <tr>
                        <th></th>
                        <th className='text-white text-center'>Tipo</th>
                        <th className='text-white text-center'>Preço</th>
                        <th className='text-white text-center'>Quantidade de quartos</th>
                        <th className='text-white text-center'>Mapa</th>
                    </tr>
                </thead>
                <tbody>
                    {venda.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/venda/' + i}>
                                    <h5 className='text-primary text-center'>Editar</h5>
                                </Link>
                                <h5 onClick={() => excluir(i)} className='text-danger text-center'> Excluir </h5>
                            </td>
                            <td className='text-white text-center'>{item.tipo}</td>
                            <td className='text-white text-center'>{item.preco}</td>
                            <td className='text-white text-center'>{item.quartos}</td>
                            <td className='text-white text-center'>
                            <Map latitude={item.latitude} longitude={item.longitude} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
    </Container>
    
    </>
  )
}

export default Venda