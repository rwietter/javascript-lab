immaBeOnTop()

var immaBeOnTop

function immaBeOnTop() {
    console.log('first') // first
}
immaBeOnTop = () => {
    console.log('second')
}

// www === www www === www www === www www === www www === www

// As declarações de funções são hasteadas antes das variáveis *
// Logo, a interpretação é dada por:
function immaBeOnTopInterpreter() {
    console.log('first')
}

immaBeOnTopInterpreter() //'first'

immaBeOnTopInterpreter = () => {
    console.log('second')
}

// www === www www === www www === www www === www www === www

function foo() {
    console.log(1)
}

foo()

function foo() {
    console.log(3) // 3
}

var foo = function() {
    console.log(2) // 2
}

foo()

/*
What gets logged here?
 [] second 1 3
 [] first 3 2 CORRECT ANSWER
 [x] second 3 3
 [] first 3 3
*/
