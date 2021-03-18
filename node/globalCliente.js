require('./global')

console.log(MinhaApp.saudacao()) // muito cuidado em utilizar a função global

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)