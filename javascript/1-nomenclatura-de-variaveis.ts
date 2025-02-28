// Nomenclatura de variáveis

const users = ['Diego', 'Mayk', 'Rodrigo'];


//DEVE SER EVITADO:
//1-Nomes de variáveis que não descrevem qual o dado que vão receber
//Como filtred que é um termo vago
//2- Nomes no diminutivo não são simples de entender 
//como u

/*
  const filtred = users.filter(u => {
    return u.startsWith('D');
});
*/

 //BOM EXEMPLO:
const usersStartingWithLetterD = users.filter(user => {
  return user.startsWith('D');
});

// -----------------------------------------------------------------

// Evite nomes genéricos (data, response, list, args, params)


//DEVE SER EVITADO: 
//NOMES GENÉRICOS constantemente usados, 
//mas que não são nomes que representam
//qual é o dado que está sendo armazenado
function getUsers() {
  const data = getUsersFromDatabase();

  // validação
  // manipulação dos dados (mapping)

  return data;
}

function getCompanies() {
  const data = getUsersFromDatabase();

  return data;
}