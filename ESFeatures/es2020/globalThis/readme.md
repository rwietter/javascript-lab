<strong>
  A Feature globalThis refere-se ao contexto global, não importa se está sendo executado no browser, no servidor ou no cliente
</strong>

```javascript
let is = globalThis.alert === this.alert;
console.log(is); // true
```
