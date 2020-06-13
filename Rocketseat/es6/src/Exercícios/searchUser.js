import axios from 'axios'
/*
  const buscaUsuario = usuario => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log('Usuário não existe')
      })
  }
  buscaUsuario('diego3g')
*/
async function buscaUsuario(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`)
    console.log(response.data)
  } catch (e) {
    console.log(`Usuário não existe: ${e}`)
  }
}
export default buscaUsuario
