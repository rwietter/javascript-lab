const form = document.querySelector('form')
form.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log(this.cep.value) // resultado do input
})

const arrowFormError = document.querySelector('form')
arrowFormError.addEventListener('submit', event => {
    event.preventDefault()
    console.log(this.cep.value) // Cannot read property 'value' of undefined
})

const arrowFormCorrect = document.querySelector('form')
arrowFormCorrect.addEventListener('submit', event => {
    event.preventDefault()
    console.log(event.target.cep.value) // input value
})
