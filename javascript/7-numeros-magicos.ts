// -----------Simples----------------

// setTimeout, setInterval

//Problema: O que o valor 2592000000 significa?
//Não é algo de facil leitura pois não é evidente seu significado
setTimeout(() => {

}, 2592000000)

//Correção
//Explicar o calculo com um comentario
setTimeout(() => {

}, 1000 * 60 * 60 * 24 * 30) // 30 dias

// ou criar uma variavel com nome descritivo
//tradução: trinta dias
const thirtyDays = 1000 * 60 * 60 * 24 * 30
setTimeout(() => {

}, thirtyDays) // 30 dias

//----------Avançado----------------

/* 
    "Dados de tempo e dinheiro são frequentemente transformados no banco de dados
    para otimizar armazenamento e cálculos. 
    Valores financeiros podem ser multiplicados por 100,
    e dias convertidos em minutos."
*/

//nao da para identificar qual o formato que os numeros estão
function calculateDiscount(price, discountAmount) {
    // retorna desconto
}

//nomeando os formatos nas variaveis
//agora da para identicar que price esta em centavos e discountAmount esta em percentual
function calculateDiscount(priceInCents, discountAmountInPercentage) {
  // retorna desconto
}