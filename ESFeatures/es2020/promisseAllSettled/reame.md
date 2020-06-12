<strong>
  O método Promise.AllSettle aceita várias promises, e todas são resolvidas mesmo as rejeitadas.
</strong>

```javascript
const myPromiseArray = [
  Promise.resolve(100),
  Promise.reject(null),
  Promise.reject(new Error("Oh no!")),
];
Promise.allSettled(myPromiseArray).then((results) =>
  results.map((result) => console.log(result))
);
/*
{ status: 'fulfilled', value: 100 }
{ status: 'rejected', reason: null }
{ status: 'rejected', reason: Error: Oh no! }
*/
```
