;(function() {
    console.log(1)
    setTimeout(function() {
        console.log(2)
    }, 1000)
    setTimeout(function() {
        console.log(3)
    }, 0)
    console.log(4)
})()
/*
Em que ordem os números 1 a 4 serão registrados no
console quando o código abaixo for executado?
1, 2, 3, 4
4, 2, 1, 3
1, 4, 3, 2 <| RESPOSTA CORRETA
4, 3, 2, 1
*/
