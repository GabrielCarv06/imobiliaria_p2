import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Cabecalho from '@/components/Cabecalho'
import { Container, Table } from 'react-bootstrap'


const Clientes = () => {

  const [clientes, setClientes] = useState([])

  useEffect(() => {
      setClientes(getAll())
  }, [])

  function getAll() {
      return JSON.parse(window.localStorage.getItem('clientes')) || []
  }

  function excluir(id) {
    if (confirm('Deseja excluir o cliente?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('clientes', JSON.stringify(itens))
      setClientes(itens)
   }
}

  return (
    <>
   
    <Cabecalho />

    
    
    <Container>
    <h2 className='text-center mt-5'>Clientes cadastrados</h2>
    <Link href={'clientes/form'} className='btn btn-danger mb-5 mt-5'>Cadastrar novo cliente</Link>
    <Table bordered hover variant="dark">
                <thead>
                    <tr>
                        <th></th>
                        <th className='text-white text-center'>Nome</th>
                        <th className='text-white text-center'>Email</th>
                        <th className='text-white text-center'>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/clientes/' + i}>
                                    <h5 className='text-primary text-center'>Editar</h5>
                                </Link>
                                <h5 onClick={() => excluir(i)} className='text-danger text-center'> Excluir </h5>
                            </td>
                            <td className='text-white text-center'>{item.nome}</td>
                            <td className='text-white text-center'>{item.email}</td>
                            <td className='text-white text-center'>{item.telefone}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
    </Container>
    
    </>
  )
}

export default Clientes