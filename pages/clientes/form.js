import Cabecalho from '@/components/Cabecalho'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Container, Form } from 'react-bootstrap'
import clienteValidator from '@/validators/clienteValidator'
import { useRouter } from 'next/router'
import { mask } from 'remask'


const FormCliente = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    function salvar(dados) {
        const clientes = JSON.parse(window.localStorage.getItem('clientes')) || []
        clientes.push(dados)
        window.localStorage.setItem('clientes', JSON.stringify(clientes))
        push('/clientes')
    }

    function handleChange(event) {
        
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')
        setValue(name, mask(valor, mascara))
    
      }


    return (
        <>
            <Cabecalho />

            <h2 className='text-center mt-5'>Cadastro de clientes</h2>

            <Container>

                <Form>
                    <Form.Group className="mb-3 position-relative mb-3" controlId="nome">
                        <Form.Label>Nome Completo:
                        </Form.Label>
                        <Form.Control type="text" isInvalid={errors.nome} {...register('nome', clienteValidator.nome)} />
                        {
                            errors.nome &&
                            <>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.nome.message}
                                </Form.Control.Feedback>
                            </>
                        }

                    </Form.Group>

                    <br></br>

                    <Form.Group className="mb-3 position-relative mb-3" controlId="email">
                        <Form.Label>E-mail
                        </Form.Label>
                        <Form.Control type="text" isInvalid={errors.email} {...register('email', clienteValidator.email)} />
                        {
                            errors.email &&
                            <>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.email.message}
                                </Form.Control.Feedback>
                            </>
                        }

                    </Form.Group>

                    <br></br>

                    <Form.Group className="mb-3 position-relative mb-3" controlId="estado">
                        <Form.Label>Estado
                        </Form.Label>
                        <Form.Control type="text" isInvalid={errors.estado} {...register('estado', clienteValidator.estado)} />
                        {
                            errors.estado &&
                            <>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.estado.message}
                                </Form.Control.Feedback>
                            </>
                        }

                    </Form.Group>

                    <br></br>

                    <Form.Group className="mb-3 position-relative mb-3" controlId="cpf">
                        <Form.Label>CPF
                        </Form.Label>
                        <Form.Control 
                        mask='999.999.999-99'
                        type="text" isInvalid={errors.cpf} {...register('cpf', clienteValidator.cpf)}
                        onChange={handleChange}
                        />
                        {
                            errors.cpf &&
                            <>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.cpf.message}
                                </Form.Control.Feedback>
                            </>
                        }

                    </Form.Group>

                    <br></br>

                    <Form.Group className="mb-3 position-relative mb-3" controlId="telefone">
                        <Form.Label>Telefone
                        </Form.Label>
                        <Form.Control
                        mask='(99) 99999-9999'
                        type="text" isInvalid={errors.telefone} {...register('telefone', clienteValidator.telefone)} 
                        onChange={handleChange}
                        />
                        {
                            errors.telefone &&
                            <>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.telefone.message}
                                </Form.Control.Feedback>
                            </>
                        }

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="preferencia">
                        <Form.Label> Você prefere: </Form.Label>
                        <Form.Select aria-label="Default select example" isInvalid={errors.preferencia} {...register('preferencia', clienteValidator.preferencia)} >
                            <option value="Apartamento">Apartamento</option>
                            <option value="Casa">Casa</option>
                            <option value="Os dois">Os dois</option>
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

export default FormCliente