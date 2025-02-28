// Booleanos

//Boleanos escritos de forma normal
//cujo nomes não dão a entender se tratar de uma varíavel que armazena verdadeiro ou falso
//Exemplo de leitura: é verdade que desabilitado
const userOnMajority = true
const disabled = true
const userGroup = true

//Se escritos em forma de pergunta existe um ganho de semântica (ganho de sentido)
// usar termos para transformar em perfuntas
// como: IS, DOES, HAS
//Exemplo de leitura: é verdade que "está" desabilitado
const isDisabled = true
const isUserOnMajority = true
const userHasGroup = true

// -----------------------------------------------------------------

//A leitura também melhor dentro das estruturas de condição

//Leitura: se usuário maior de idade
if (userOnMajority) {
    // ... (código dentro do if)
  }
  
//Leitura: se usuário É maior de idade
if (isUserOnMajority) {
  // ... (código dentro do if)
}

// Booleanos sempre como perguntas = semântico

const loading = true
const isLoading = true

//Também deve ser aplicado a regra anterior de nomes descritivos
//isLoading não deixa claro o que está sendo carreado!
if(isLoading){}

// melhorando a Nomenclatura

const isUserProfileLoading = true

// loading, disabled, data, fetching, list
// booleanos como perguntas

// if loading, if is user profile loading