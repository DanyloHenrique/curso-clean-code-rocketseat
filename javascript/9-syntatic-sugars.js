/*
    As linguagens tendem a trazer formas próprias de lidar com algumas necessidades
    Essas ferramentas podem trazer mais produtividade como é o caso, no javascript, das
    desestruturação, Arrow Functions, Template Literals.

    Porém existem aquelas que não são realmente produtivas e prejudicam a legibilidade
    do código, como é o caso de usar o operado + ou !! para conversão de tipos
*/

const numberInString = "12373";

//FORMAS DE CONVERSÃO DE VARIÁVEL VISTA APENAS NO JAVASCRIPT

//converte para numero
// const number = +numberInString

//converte para boolean
// const isNumber = !!numberInString

//FORMA TRADICIONAL DE CONVERSÃO DE VARIÁVEIS
//PREFERÍVEL
const number = Number(numberInString);
const isNumberNotNull = Boolean(number);
const numberAsString = String(number);
