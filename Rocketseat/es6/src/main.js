import axios from 'axios'

import Usuario, { idade as IdadeUsuario } from './functions'
import Github from './Exercícios/gitRepo'
import umPorSegundo from './Exercícios/promiseResolve'
import buscaUsuario from './Exercícios/searchUser'

// Classes
console.log(IdadeUsuario)
Usuario.info()

// Axios get api
class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      )
      console.log(response.data)
      const { followers, following, login, location } = response.data
      console.log(followers, following, login, location)
    } catch (e) {
      console.warn(e)
    }
  }
}

Api.getUserInfo('euiciowr')

// 1
umPorSegundo()

// 2
Github.getRepositories('euiciowr')

// 3
buscaUsuario(`euiciowr`)

/**
 * JS ASYNCRONO
 *
 *  const minhaPromise = () =>
 *  new Promise((resolve, reject) => {
 *    setTimeout(() => {
 *      resolve('Ok')
 *    }, 2000)
 *  })
 *  async function executaPromise() {
 *    const response = await minhaPromise()
 *    console.log(response)
 *  }
 */
