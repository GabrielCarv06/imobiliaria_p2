import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Cabecalho from '@/components/Cabecalho'
import { Container, Table } from 'react-bootstrap'


const Venda = () => {

  const [aluguel, setAluguel] = useState([])

  useEffect(() => {
      setAluguel(getAll())
  }, [])

  function getAll() {
      return JSON.parse(window.localStorage.getItem('aluguel')) || []
  }

  function excluir(id) {
    if (confirm('Deseja excluir o imóvel?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('aluguel', JSON.stringify(itens))
      setAluguel(itens)
   }
}

  return (
    <>
   
    <Cabecalho />

    <Container>
    <h2 className='text-center mt-5'>Imóveis cadastrados</h2>
    <Link href={'alugar/form'} className='btn btn-danger mb-5 mt-5'>Cadastrar novo imóvel</Link>
    <Table bordered hover variant="dark">
                <thead>
                    <tr>
                        <th></th>
                        <th className='text-white text-center'>Tipo</th>
                        <th className='text-white text-center'>Preço</th>
                        <th className='text-white text-center'>Quantidade de quartos</th>
                    </tr>
                </thead>
                <tbody>
                    {aluguel.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/alugar/' + i}>
                                    <h5 className='text-primary text-center'>Editar</h5>
                                </Link>
                                <h5 onClick={() => excluir(i)} className='text-danger text-center'> Excluir </h5>
                            </td>
                            <td className='text-white text-center'>{item.tipo}</td>
                            <td className='text-white text-center'>{item.preco}</td>
                            <td className='text-white text-center'>{item.quartos}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
    </Container>
    
    </>
  )
}

export default Venda