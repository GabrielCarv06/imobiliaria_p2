const vendaValidator = {

  tipo: {
    required: "Campo obrigatório",
  },

  quartos: {
    required: "Campo obrigatório",
  },

  latitude: {
    required: "Campo obrigatório",
  },

  longitude: {
    required: "Campo obrigatório",
  },

  m2: {
    required: "Campo obrigatório",

  },

  preco: {
    required: "Campo obrigatório!",
    minLength: {
      value: 2,
      message: 'O mínimo de caracteres é 2'
    }
  },

}

export default vendaValidator