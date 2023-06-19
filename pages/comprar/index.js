import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Cabecalho from '@/components/Cabecalho'
import { Container, Table } from 'react-bootstrap'


const Compra = () => {

  const [compra, setCompra] = useState([])

  useEffect(() => {
      setCompra(getAll())
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('compra')) || []
  }

  function excluir(id) {
    if (confirm('Deseja excluir a pesquisa?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('compra', JSON.stringify(itens))
      setCompra(itens)
   }
}

  return (
    <>
   
    <Cabecalho />

    <Container>
    <h2 className='text-center mt-5'>Compras</h2>
    <Link href={'comprar/form'} className='btn btn-danger mb-5 mt-5'>Comprar</Link>
    <Table bordered hover variant="dark">
                <thead>
                    <tr>
                        <th></th>
                        <th className='text-white text-center'>Tipo</th>
                        <th className='text-white text-center'>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {compra.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/comprar/' + i}>
                                    <h5 className='text-primary text-center'>Editar</h5>
                                </Link>
                                <h5 onClick={() => excluir(i)} className='text-danger text-center'> Excluir </h5>
                            </td>
                            <td className='text-white text-center'>{item.tipo}</td>
                            <td className='text-white text-center'>{i}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
    </Container>
    
    </>
  )
}

export default Compra