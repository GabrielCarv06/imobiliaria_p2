import Cabecalho from '@/components/Cabecalho'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Container, Form } from 'react-bootstrap'
import { useRouter } from 'next/router'
import compraValidator from '@/validators/compraValidator'


const FormCompra = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
    const [tipos, setTipos] = useState([])


    useEffect(() => {
        setTipos(JSON.parse(window.localStorage.getItem('tipos')) || [])
    }, [])

    useEffect(() => {
        if (query.id) {
            const id = query.id
            const compra = JSON.parse(window.localStorage.getItem('compra'))
            const campo = compra[id]

            for (let atributo in campo) {
                setValue(atributo, campo[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const compra = JSON.parse(window.localStorage.getItem('compra')) || []
        compra.splice(query.id, 1, dados)
        window.localStorage.setItem('compra', JSON.stringify(compra))
        push('/comprar')
    }

    return (
        <>
            <Cabecalho />

            <Container>

                <Form>
                <Form.Group className="mb-3" controlId="tipo">
                        <Form.Label> Você quer comprar:</Form.Label>
                        <Form.Select aria-label="Default select example" isInvalid={errors.tipo} {...register('tipo', compraValidator.preferencia)} >
                            {tipos.map((item) => (
                                <option> {item.tipo} </option>
                            ))}
                        </Form.Select>
                </Form.Group>

                    <br></br>

                    <Form.Group className="mb-3" controlId="pets">
                        <Form.Label> Você procura um imóvel pet friendly?</Form.Label>
                        <Form.Select aria-label="Default select example" isInvalid={errors.pets} {...register('pets', compraValidator.pets)} >
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                        </Form.Select>
                    </Form.Group>

                    <br></br>

                    <Form.Group className="mb-3 position-relative mb-3" controlId="quartos">
                        <Form.Label>Quantidade de quartos
                        </Form.Label>
                        <Form.Control type="number" isInvalid={errors.quartos} {...register('quartos')} />
                        {
                            errors.quartos &&
                            <>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.quartos.message}
                                </Form.Control.Feedback>
                            </>
                        }

                    </Form.Group>

                    <br></br>

                    <Form.Group className="mb-3" controlId="faixaPreco">
                        <Form.Label> Escolha uma faixa de preços: </Form.Label>
                        <Form.Select aria-label="Default select example" isInvalid={errors.faixaPreco} {...register('faixaPreco', compraValidator.faixaPreco)} >
                            <option value="R$ 100.000 - R$ 200.000">R$ 100.000 - R$ 200.000</option>
                            <option value="R$ 200.000 - R$ 300.000">R$ 200.000 - R$ 300.000</option>
                            <option value="R$ 300.000 - R$ 400.000">R$ 300.000 - R$ 400.000</option>
                            <option value="R$ 500.000 - R$ 600.000">R$ 500.000 - R$ 600.000</option>
                        </Form.Select>
                    </Form.Group>


                    <Button variant="success"
                        onClick={
                            handleSubmit(salvar)
                        }>
                        Salvar
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default FormCompra