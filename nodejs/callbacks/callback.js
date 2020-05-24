/*
0- obter o usuario
1- Preciso o numero de telefone do usuario a partir do id
2- obter o endereco do usario pelo id

// problema 1, usuario.id é executado antes de retorna do setTimeout
*/

function obterUsuario(callback) {
  setTimeout(function() {
    return callback(null, {
      id: 1,
      nome: "Aladin",
      dataNascimento: new Date()
    });
  }, 1000);
}

function obterTelefone(idUsuario, callback) {
  // callback é o último parâmetro
  setTimeout(() => {
    return callback(null, {
      numero: 99674634,
      ddd: 33
    });
  }, 2000);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "Sao joao",
      numero: 1456,
      uf: "RS",
      cidade: "Cartolina"
    });
  }, 2000);
}

obterUsuario(function resolverUsuario(error, usuario) {
  // null || "" || 0 === false
  if (error) {
    console.log("error", error);
    return;
  }
  obterTelefone(usuario.id, function obterTelefone(error1, telefone) {
    if (error1) {
      console.log("error", error1);
      return;
    }
    obterEndereco(usuario.id, function obterEndereco(error3, endereco) {
      if (error3) {
        console.log(error3);
        return;
      }
      console.log(`
        Nome: ${usuario.nome}
        Id: ${usuario.id}
        Nascimento: ${usuario.dataNascimento}
        Telefone: ${telefone.numero}
        dd: ${telefone.ddd}
        Rua: ${endereco.rua}
        UF: ${endereco.uf}
        cidade: ${endereco.cidade}
    `);
    });
  });
});
