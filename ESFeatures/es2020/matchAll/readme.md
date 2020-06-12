<strong>Iterando a juntando com map</strong>

```javascript
let regExp = /\d{0,1}[0-9]-\d{0,1}[0-9]-\d{0,3}[0-9]/g;
let str = "19-11-2012";
let iterator = str.matchAll(regExp);
Array.from(iterator, (result) => result.map((i) => console.log(i))); // 19-11-2012
```

<strong>Isso retorna um array com o valor de match. Mas podemos iterar sobre ele:</strong>

<strong>O método MathAll retorna um iterator que, quanto iterado, retorna todos os grupos correspondentes, um após o outro.</strong>

```javascript
regExp = /[a-c]/g;
str = "abc";
iterator = str.matchAll(regExp);
Array.from(iterator, (result) => console.log(result));
/*
  [ 'a', index: 0, input: 'abc', groups: undefined ]
  [ 'b', index: 1, input: 'abc', groups: undefined ]
  [ 'c', index: 2, input: 'abc', groups: undefined ]
*/
```
