/*
  * O objetivo deste exercício é converter uma sequência de caracteres em uma nova sequência, em
  * que cada caractere da nova sequência é "("se esse caractere aparece apenas uma vez na sequência
  * original ou ")"se esse caractere aparece mais de uma vez na sequência original. Ignore letras
  * maiúsculas ao determinar se um caractere é uma duplicata.

  Exemplos
  ? "din"      =>  "((("
  ? "recede"   =>  "()()()"
  ? "Success"  =>  ")())())"
  ? "(( @"     =>  "))((" 

  ! As mensagens de afirmação podem não estar claras sobre o que são exibidas em alguns idiomas.
  ! Se você ler "...It Should encode XXX", "XXX"é o resultado esperado, não a entrada!

  * Test.assertEquals(duplicateEncode("din"),"(((");
  * Test.assertEquals(duplicateEncode("recede"),"()()()");
  * Test.assertEquals(duplicateEncode("Success"),")())())","should ignore case");
  * Test.assertEquals(duplicateEncode("(( @"),"))((");
*/

// const element = [...new Set(strArr)]
function duplicateEncode(char) {
    let strArr = [...char]
    for (let index = 0; index < strArr.length; index++) {
        if (strArr[index] == strArr[index + 2]) {
            strArr[index] = ')'
        } else {
            strArr[index] = '('
        }
    }
    return strArr.join('').toString()
}
const char = `recede`
console.log(duplicateEncode(char))

// ( => 1 se não repetir caractere da sequencia
// ) => +1 vez na sequencia

// * obj1 = converter uma sequência de caracteres
// * obj2 = cada caractere da """nova sequência""" é "(" se esse caractere aparece """apenas""" """uma vez na sequência original"""
// * obj3 = ou ")" se esse caractere aparece """mais de uma vez na sequência original"""
