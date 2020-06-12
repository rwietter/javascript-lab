/*
# Promisses vem para resolver os problemas de callbacks

# CICLO DE VIDA DE UMA PROMISE:
- PENDING: estado inicial, ainda não terminou ou ainda não foi rejeitado
- FULFILLED: quando executou todas as operações com sucesso
- REJECTED: quando a operação falhou

# OPÇÕES
- caso a promise de sucesso: .then(resolverQuandoTerminar())
- caso a promise de error: .catch()
- dentro da função .then() vai ser retornado uma nova promise, e vai passar a frente
- a partir dessa fução da pra pegar objetos etc...

# Tratar o erro
- encadear .then e terminar com .catch(tratarError)
*/

// Segunda parte = resolvendo promises com modulo do nodejs
const util = require("util");

function obterUsuario() {
  // problema = reject
  // sucess = resolv
  return new Promise(function (resolve, reject) {
    // return reject(new Error("Deu ruim")); // retornar para tratar o error
    setTimeout(function () {
      return resolve({
        id: 1,
        nome: "Aladin",
        dataNascimento: new Date(),
      });
    }, 1000);
  });
}

function obterTelefone(idUsuario) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      return resolve({
        numero: 99674634,
        ddd: 33,
      });
    }, 2000);
  });
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "Sao joao",
      numero: 1456,
      uf: "RS",
      cidade: "Cartolina",
    });
  }, 2000);
}

const obterEnderecoAsync = util.promisify(obterEndereco); // method que processa a promise

const usuarioPromise = obterUsuario();
// para manipular o sucess, usamos .then
// para manipular error, usamos .catch
// pipe = usuario -> telefone -> telefone
usuarioPromise
  // no .then abaixo foi feito o retorno da promise manualmente
  .then(function (usuario) {
    return obterTelefone(usuario.id).then(function resolverTelefone(result) {
      return {
        usuario: {
          nome: usuario.nome,
          id: usuario.id,
          dataNascimento: usuario.dataNascimento,
        },
        telefone: result,
      };
    });
  })
  // no .then abaixo foi feito o retorno da função apartir do processamento da util.promisify(obterEndereco)
  .then(function (resultado) {
    const obterEndereco = obterEnderecoAsync(resultado.usuario.id);
    return obterEndereco.then(function resolverEndereco(result) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result,
      };
    });
  })
  .then(function (resulado) {
    console.log(`
    id: ${resulado.usuario.id}, nome: ${resulado.usuario.nome}, Nascimento: ${resulado.usuario.dataNascimento}
    Endereço: ${resulado.endereco.rua}, ${resulado.endereco.uf} ${resulado.endereco.cidade}, ${resulado.endereco.numero}
    Telefone: ${resulado.telefone.ddd} - ${resulado.telefone.numero}
      `);
  })
  .catch(function (error) {
    console.log("error:", error);
  });
