// 2:
import axios from 'axios'

/*
export default class Github {
  static getRepositories(repo) {
    axios
      .get(`https://api.github.com/repos/${repo}`)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log('Repositório não existe')
      })
  }
}
Github.getRepositories('rocketseat/rocketseat.com.br')
Github.getRepositories('rocketseat/dslkvmskv')
*/

export default class Github {
  static async getRepositories(user) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${user}/repos?per_page=100`
      )
      console.log(response.data)
      const { name } = response.data
      console.log(name)
    } catch (e) {
      console.log('Repositório não existe')
    }
  }
}
