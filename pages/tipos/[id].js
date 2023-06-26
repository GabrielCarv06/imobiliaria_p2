import Cabecalho from '@/components/Cabecalho'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Container, Form } from 'react-bootstrap'
import { useRouter } from 'next/router'
import aluguelValidator from '@/validators/aluguelValidator'
import { mask, currency } from 'remask'

const FormTipo = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    useEffect(() => {
        if (query.id) {
            const id = query.id
            const tipos = JSON.parse(window.localStorage.getItem('tipos'))
            const tipo = tipos[id]

            for (let atributo in tipo) {
                setValue(atributo, tipo[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const tipos = JSON.parse(window.localStorage.getItem('tipos')) || []
        tipos.splice(query.id, 1, dados)
        window.localStorage.setItem('tipos', JSON.stringify(tipos))
        push('/tipos')
    }

    return (
        <>
            <Cabecalho />

            <h2 className='text-center mt-5'>Cadastro de tipos</h2>

            <Container>

                <Form>
                <Form.Group className="mb-3 position-relative mb-3" controlId="tipo">
                        <Form.Label> Cadastre um tipo de imóvel: 
                        </Form.Label>
                        <Form.Control type="text" isInvalid={errors.tipo} {...register('tipo', aluguelValidator.tipo)} />
                        {
                            errors.tipo && 
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.tipo.message}
                                </Form.Control.Feedback>
                        }

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

export default FormTipo