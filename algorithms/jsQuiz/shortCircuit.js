const notification = 1
console.log(
    `You have ${notification} notification ${notification !== 1 && 's'}`
)

/*
- Infelizmente, nossa avaliação de curto-circuito não
- funcionará como pretendido aqui: notifications !== 1 && 's'avalia para false, o
- que significa que realmente estaremos registrando You have 1 notificationfalse. Se
- quisermos que nosso snippet funcione corretamente, poderíamos considerar um operador ternário.
*/
