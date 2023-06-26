import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Cabecalho from '@/components/Cabecalho'
import { Container, Table } from 'react-bootstrap'


const Venda = () => {

  const [tipos, setTipos] = useState([])

  useEffect(() => {
    setTipos(getAll())
  }, [])

  function getAll() {
      return JSON.parse(window.localStorage.getItem('tipos')) || []
  }

  function excluir(id) {
    if (confirm('Deseja excluir o tipo de imóvel?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('tipos', JSON.stringify(itens))
      setTipos(itens)
   }
}

  return (
    <>
   
    <Cabecalho />

    <Container>
    <h2 className='text-center mt-5'>Tipos cadastrados</h2>
    <Link href={'tipos/form'} className='btn btn-danger mb-5 mt-5'>Cadastrar novo tipo de imóvel</Link>
    <Table bordered hover variant="dark">
                <thead>
                    <tr>
                        <th></th>
                        <th className='text-white text-center'>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {tipos.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/tipos/' + i}>
                                    <h5 className='text-primary text-center'>Editar</h5>
                                </Link>
                                <h5 onClick={() => excluir(i)} className='text-danger text-center'> Excluir </h5>
                            </td>
                            <td className='text-white text-center'>{item.tipo}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
    </Container>
    
    </>
  )
}

export default Venda