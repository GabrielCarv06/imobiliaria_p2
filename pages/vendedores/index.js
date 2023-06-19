import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Cabecalho from '@/components/Cabecalho'
import { Container, Table } from 'react-bootstrap'


const Vendedores = () => {

  const [vendedores, setVendedores] = useState([])

  useEffect(() => {
      setVendedores(getAll())
  }, [])

  function getAll() {
      return JSON.parse(window.localStorage.getItem('vendedores')) || []
  }

  function excluir(id) {
    if (confirm('Deseja excluir o cliente?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('vendedores', JSON.stringify(itens))
      setVendedores(itens)
   }
}

  return (
    <>
   
    <Cabecalho />

    <Container>
    <h2 className='text-center mt-5'>Vendedores cadastrados</h2>
    <Link href={'vendedores/form'} className='btn btn-danger mb-5 mt-5'>Cadastrar novo vendedor</Link>
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
                    {vendedores.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/vendedores/' + i}>
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

export default Vendedores