import Cabecalho from '@/components/Cabecalho'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Container, Form } from 'react-bootstrap'
import compraValidator from '@/validators/compraValidator'
import { useRouter } from 'next/router'

const FormCompra = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm()

    function salvar(dados) {
        const compra = JSON.parse(window.localStorage.getItem('compra')) || []
        compra.push(dados)
        window.localStorage.setItem('compra', JSON.stringify(compra))
        push('/comprar')
    }

    return (
        <>
            <Cabecalho />

            <h2 className='text-center mt-5'>Preencha os campos que <br></br> iremos procurar um imóvel de acordo</h2>

            <Container>

                <Form>
                    <Form.Group className="mb-3" controlId="tipo">
                        <Form.Label> Você quer comprar:</Form.Label>
                        <Form.Select aria-label="Default select example" isInvalid={errors.tipo} {...register('tipo', compraValidator.preferencia)} >
                            <option value="Apartamento">Um apartamento</option>
                            <option value="casa">Uma casa</option>
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
                        Pesquisar
                    </Button>
                </Form>

            </Container>
        </>
    )
}

export default FormCompra