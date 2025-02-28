// -----------------Negação dentro de ifs-------------------------
//Existe uma dificuldade maior de leitura caso sejam escritas boleanos para condicionais
//de forma que serão usadas juntas em um único laço if com suas negações

const isUserOlderThan18Years = true
const doesUserLiveOnBrazil = true

// Fazer uma verificação se o usuário é menor de idade e mora fora do Brasil
if (!isUserOlderThan18Years && !doesUserLiveOnBrazil) {
    // O usuário não tem mais que 18 anos e o usuário não mora no Brasil
}

//MELHORANDO A LEITURA REESCREVENDO AS VARIÁVEIS
//agora a propria variável é pensando se o usuário é mais jovem que 18 anos e não mora no brasil
const isUserYoungerThan18Years = true;
const doesUserLivesOutsideBrazil = true;

//pode ser usada de forma normal, sem negações
if (isUserYoungerThan18Years && doesUserLivesOutsideBrazil) {
  // ... (código dentro do if)
}

// ------------------Early return vs else.------------------------
// A utilização das chaves else podem ser evitadas graças ao Early Return
// Dentro de uma função ou estrutura, ao receber uma instrução de RETURN
// O programa vai parar de executar este escopo
// Qualquer código após o RETURN não será executado

// condicional com else
function isUserOlderThan18Years(user) {
    if (!user) {
        return { error: true }
    } else {
        return user.age >= 18
    }
}

// condicional early return
function isUserOlderThan18Year(user) {
  if (!user) {
    return { error: true };
  }
  //só chega aqui se não passar no outro return primeiro
  return user.age >= 18;
}

// ------------------Evite condicionais aninhadas------------------

// condicionais aninhada
if (user.age >= 18) {
    if (user.occupation === 'Programador') {

    }
}


//Prefira escrever unindo as condições ou se possível uma embaixo da outra

//unindo
if(user.age >= 18 && user.occupation === 'Programador'){}

//Se dentro de uma função, pode ser embaixo por causa do early return

function printOccupation(){
    if(!(user.age >= 18)){
        return
    }

    if(user.occupation === 'Programador'){
        //print
    }
}


