const vendedorValidator = {
    nome: {
        required: "Campo obrigatório",
        minLength: {
          value: 10,
          message: 'O mínimo de caracteres é 10'
        },
    
        maxLength: {
          value: 40,
          message: 'O máximo de caracteres é 40'
        }
      },
      
    cpfCnpj: {
      required: "Campo obrigatório",
        pattern: {
          value: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/,
          message: 'Campo inválido!'
        },
    }, 


    email: {
      required: "Campo obrigatório",
    }, 

    telefone: {
      required: "Campo obrigatório",
      pattern: {
        value: /^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}$/,
        message: 'O formato deve ser: (XX) XXXXX-XXXX'
      },
    },

    estado: {
        required: "Campo obrigatório!",
        minLength: {
          value: 2,
          message: 'O mínimo de caracteres é 2'
        },
    
        maxLength: {
          value: 50,
          message: 'O máximo de caracteres é 50'
        }
    },

    preferencia: {
      required: "Campo obrigatório",
    }, 
}

export default vendedorValidator