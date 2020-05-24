const { validaCpf } = require('../../classes/Utils')

export default (value, next) => {
    if (validaCpf(value)) {
        return next()
    }
    return next("Cpf inválido")
}