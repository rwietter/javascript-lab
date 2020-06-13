const url = 'www.google.com'
const { length: index, [index - 1]: domainLink = 'www' } = url
    .split('.')
    .filter(Boolean)
console.log(domainLink) // com

const urlq = 'quiz.typeofnan.dev'
const { length: ln, [ln - 1]: domain = 'quiz' } = urlq
    .split('.')
    .filter(Boolean)
console.log(domain) // dev

/*
    url.split('.')vai dividir a nossa urlcadeia de pelo .caráter, resultando
    na seguinte matriz: ['quiz', 'typeofnan', 'dev'].

    aplicar filter(Boolean)nesta matriz é o mesmo que filter(el => Boolean(el)).
    Como todos os elementos são verdadeiros, Boolean(el)sempre serão true, o
    que significa que na verdade não filtramos nada.

    O próximo bit aplica a destruição de objetos. Como nossa matriz é realmente
    um objeto, isso é permitido.
    const { length: ln, [ln - 1]: domain = 'quiz' } = [
        'quiz',
        'typeofnan',
        'dev'
    ];
    A aplicação disso à nossa matriz, à lengthqual atribuímos ln, é 3, ln - 1é 2, e
    o item no índice 2da nossa matriz é dev. Portanto, a resposta é dev!
*/
