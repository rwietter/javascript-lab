const s = new Date().getSeconds()
console.log(s)

setTimeout(function() {
    // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
    console.log('Ran after ' + (new Date().getSeconds() - s) + ' seconds')
}, 500)

while (true) {
    if (new Date().getSeconds() - s >= 2) {
        console.log('Good, looped for 2 seconds')
        break
    }
}
// A execução depende do número de esperar tarefas na fila

/* A função  setTimeout é chamada com 2 argumentos: uma mensagem para
adicionar à fila, e um valor de tempo(opcional; o padrão é 0). */

/* Se não houver outra mensagem na fila, a mensagem é processada logo
após o atraso. No entanto, se houver mensagens, a setTimeoutmensagem
terá de esperar por outras mensagens a serem processadas. Por esta
razão, o segundo argumento indica um mínimo de tempo não é uma
garantia de tempo. */

// www !== www !== www !== www !== www !== www !== www !== www !==

;(function() {
    console.log('this is the start')

    setTimeout(function cb() {
        console.log('Callback 1: this is a msg from call back')
    }) // has a default time value of 0

    console.log('this is just a message')

    setTimeout(function cb1() {
        console.log('Callback 2: this is a msg from call back')
    }, 0)

    console.log('this is the end')
})()

// "this is the start"
// "this is just a message"
// "this is the end"
// "Callback 1: this is a msg from call back"
// "Callback 2: this is a msg from call back"
