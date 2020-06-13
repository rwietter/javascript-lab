const ul = document.getElementById("users");
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then(resp => resp.json()) // * resolve
  .then(function(data) {
    // * resolve pós then one
    console.log(data);
    return data.map(function(user) {
      let li = document.createElement("li");
      li.innerHTML = `${user.name} ${user.username}`;
      ul.appendChild(li);
    });
  })
  .catch(error => {
    console.log("error");
  });

// ---------------------- Resolver todas as promises para depois tratar ---------- //
const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(1);
Promise.all([promise1, promise2, promise3]).then(values => {
  console.log("Todas as promises foram resolvidas", ...values);
});

// ------------------------------------------------------------------------------- //

// ----------------- A primeira promise resolvida retorna ------------------------ //
const promise4 = Promise.resolve(2);
const promise5 = Promise.resolve(2);
const promise6 = Promise.resolve(1);
Promise.race([promise1, promise2, promise3])
  .then(function(values) {
    console.log("Todas as promises foram resolvidas", ...values);
  })
  .catch(function(values) {
    console.log("Error");
  });
