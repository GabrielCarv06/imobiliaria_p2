import Cabecalho from '@/components/Cabecalho'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Container, Form } from 'react-bootstrap'
import { useRouter } from 'next/router'
import aluguelValidator from '@/validators/aluguelValidator'
import { mask, currency } from 'remask'

const FormAluguel = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
    const [tipos, setTipos] = useState([])


    useEffect(() => {
        setTipos(JSON.parse(window.localStorage.getItem('tipos')) || [])
    }, [])


    useEffect(() => {
        if (query.id) {
            const id = query.id
            const aluguel = JSON.parse(window.localStorage.getItem('aluguel'))
            const campo = aluguel[id]

            for (let atributo in campo) {
                setValue(atributo, campo[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const aluguel = JSON.parse(window.localStorage.getItem('aluguel')) || []
        aluguel.splice(query.id, 1, dados)
        window.localStorage.setItem('aluguel', JSON.stringify(aluguel))
        push('/alugar')
    }

    function handleChange(event) {
        
        const name = event.target.name
        const valor = event.target.value
        setValue(name, currency.mask({ locale: 'pt-BR', currency: 'BRL', value: valor}))
    
    }

    return (
        <>
            <Cabecalho />

            <h2 className='text-center mt-5'>Cadastro de aluguel</h2>

            <Container>

                <Form>
                <Form.Group className="mb-3" controlId="tipo">
                        <Form.Label> Você está alugando um(a):</Form.Label>
                        <Form.Select aria-label="Default select example" isInvalid={errors.tipo} {...register('tipo', aluguelValidator.tipo)} >
                            {tipos.map((item) => (
                                <option> {item.tipo} </option>
                            ))}
                        </Form.Select>
                </Form.Group>

                    <br></br>

                    <Form.Group className="mb-3 position-relative mb-3" controlId="quartos">
                        <Form.Label>Quantidade de quartos
                        </Form.Label>
                        <Form.Control type="number" isInvalid={errors.quartos} {...register('quartos', aluguelValidator.quartos)} />
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

                    <Form.Group className="mb-3 position-relative mb-3" controlId="m2">
                        <Form.Label> Metros quadrados
                        </Form.Label>
                        <Form.Control type="text" isInvalid={errors.m2} {...register('m2', aluguelValidator.m2)} />
                        {
                            errors.m2 &&
                            <>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.m2.message}
                                </Form.Control.Feedback>
                            </>
                        }

                    </Form.Group>

                    <br></br>

                    <Form.Group className="mb-3 position-relative mb-3" controlId="preco">
                        <Form.Label>Preço
                        </Form.Label>
                        <Form.Control type="text" isInvalid={errors.preco} {...register('preco', aluguelValidator.preco)}
                        onBlur={handleChange}
                        />
                        {
                            errors.preco &&
                            <>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.preco.message}
                                </Form.Control.Feedback>
                            </>
                        }

                    </Form.Group>

                    <br></br>

                    <Form.Group className="mb-3 position-relative mb-3" controlId="latitude">
                        <Form.Label>Latitude
                        </Form.Label>
                        <Form.Control type="text" isInvalid={errors.latitude} {...register('latitude', aluguelValidator.latitude)} />
                        {
                            errors.latitude &&
                            <>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.latitude.message}
                                </Form.Control.Feedback>
                            </>
                        }

                    </Form.Group>
                    <br></br>

                    <Form.Group className="mb-3 position-relative mb-3" controlId="longitude">
                        <Form.Label>Longitude
                        </Form.Label>
                        <Form.Control type="text" isInvalid={errors.longitude} {...register('longitude', aluguelValidator.longitude)} />
                        {
                            errors.longitude &&
                            <>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.longitude.message}
                                </Form.Control.Feedback>
                            </>
                        }

                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Foto do imóvel</Form.Label>
                        <Form.Control type="file" />
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

export default FormAluguel