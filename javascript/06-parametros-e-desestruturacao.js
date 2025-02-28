// Rota para criação do usuário (name, email, password)
// Controller (name, email, password)
// Repositório (name, email, password)

// ------------------DESESTRUTURAÇÃO-------------------
//É notável como não da para entender quais são os parâmetros passados entre as funções
//se não fosse os comentarios acima, não seria possível saber o que está sendo passado
function createUserRoute(body) {
    // validações
    createUserController(body);
}

function createUserController(data){
    usersRepository.create(data)
}
  
const usersRepository = {
    create(data) {
      // cria o usuário (name, email, password)
    },
};


//MELHORANDO O CÓDIGO
//Para criar códigos que podem ser lidos e entendidos facilmente
//Pode ser usada a desestruturação para deixar nítido quais são os dados recebidos e enviados
function createUserController(userData){
    const { name, email, password } = userData

    usersRepository.create({ 
        name,
        email,
        password 
    })
}
  

// ------------------OBJETO VS MUITOS PARAMETROS-------------------

//1-função que recebe multiplos parametros
function createUserRoute(requestBody, params) {}

// Chamadas feita normalmente de outro arquivo:
createUserRoute({ name: "João", email: "joao@email.com", password: "123" }, { id: 1 })

//caso algum parametro não for ser passado
//é necessário escrever algo como null e não é possível identificar o que é
createUserRoute(null, { id: 1 }) //passando somente o id



//2-função que recebe objeto como paramtro
function createUserRoute({ requestBody, params }) {}

// Chamadas feita normalmente de outro arquivo:
createUserRoute({
    requestBody: { name: "João", email: "joao@email.com", password: "123" },
    params: { id: 1 }
})

//null pode ser omitido e evitar problemas na leitura
createUserRoute({
    params: { id: 1 }
})

//Também é importante retornar em forma de objeto, para possíveis expansões de dados no futuro
const usersRepository = {
    create(data) {
        // Cria o usuário com os parâmetros: name, email, password
        const user = createUserOnDatabase()

        return {
            user,
            //id pode ser retornado futuramente
        }
    }
}