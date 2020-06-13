const api = () => {
  axios
    .get("https://api.github.com/users/euiciowr")
    .then(function(response) {})
    .catch(function(error) {});
};

api();
