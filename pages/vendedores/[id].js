import Cabecalho from '@/components/Cabecalho'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Container, Form } from 'react-bootstrap'
import clienteValidator from '@/validators/clienteValidator'
import { useRouter } from 'next/router'
import vendedorValidator from '@/validators/vendedorValidator'
import { mask } from 'remask'

const FormVendedor = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    useEffect(() => {
        if(query.id){
            const id = query.id
            const vendedores = JSON.parse(window.localStorage.getItem('vendedores'))
            const vendedor = vendedores[id]

            for(let atributo in vendedor){
                setValue(atributo, vendedor[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const vendedores = JSON.parse(window.localStorage.getItem('vendedores')) || []
        vendedores.splice(query.id, 1, dados)
        window.localStorage.setItem('vendedores', JSON.stringify(vendedores))
        push('/vendedores')
    }

    const cpjCnpjMascara = ['999.999.999-99', '99.999.999/9999-99']

    function handleCPFCNPJ(event) {
        
        const name = event.target.name
        const valor = event.target.value
        setValue(name, mask(valor, cpjCnpjMascara))
    
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

            <h2 className='text-center mt-5'>Cadastro de vendedores</h2>

            <Container>

                <Form>
                    <Form.Group className="mb-3 position-relative mb-3" controlId="nome">
                        <Form.Label>Nome Completo:
                        </Form.Label>
                        <Form.Control type="text" isInvalid={errors.nome} {...register('nome', vendedorValidator.nome)} />
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
                        <Form.Control type="text" isInvalid={errors.email} {...register('email', vendedorValidator.email)} />
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
                        <Form.Control type="text" isInvalid={errors.estado} {...register('estado', vendedorValidator.estado)} />
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

                    <Form.Group className="mb-3 position-relative mb-3" controlId="cpfCnpj">
                        <Form.Label>CPF ou Cnpj
                        </Form.Label>
                        <Form.Control type="text" 
                        isInvalid={errors.cpfCnpj}
                         {...register('cpfCnpj', vendedorValidator.cpfCnpj)}
                         onBlur={handleCPFCNPJ}
                         />
                        {
                            errors.cpfCnpj &&
                            <>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.cpfCnpj.message}
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
                            type="text" 
                            isInvalid={errors.telefone} 
                            {...register('telefone', vendedorValidator.telefone)}
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
                        <Form.Label> Você irá: </Form.Label>
                        <Form.Select aria-label="Default select example" isInvalid={errors.preferencia} {...register('preferencia', vendedorValidator.preferencia)} >
                            <option value="Vender">Vender</option>
                            <option value="Oferecer aluguel">Oferecer aluguel</option>
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

export default FormVendedor