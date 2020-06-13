;((fn, val) => {
    return fn(val)
})(console.log, 5)

/*
- O trecho claramente ilude um IIFE quando imediatamente invocamos uma
- função passando console.loge 5para ela. Além disso, descobrimos que
- esse é um HOF como fnuma função e um HOF é definido como qualquer função
- que aceita outra função como parâmetro ou retorna uma função.
*/
