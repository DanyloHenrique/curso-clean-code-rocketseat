//um componentes react
//declarado um booleano para caso o botão estiver desabilitado
//booleano usado para escrever diferentes textos na tela

function Button() {
    const isButtonDisabled = true
  
    return (
      <button disabled={isButtonDisabled}>
        <span></span>

        {/* Existe um problema de semântica nessa condicional */}
        {/* leitura: se botão está desabilitado, então escreve carregando, senão escreve enviar */}
        {isButtonDisabled ? 'Carregando' : 'Enviar'}
      </button>
    )
}

//Esse tipo de problema acontece por que o nome da variável foi escrito
//Pensando no EFEITO de algo
//de forma clara: o botão desabilitado é o resultado de alguma coisa anterior
//para melhorar a leitura do código, deve ser dado nome nas CAUSAS
//ou seja, naquilo que gera um efeito

//Exemplo: booleano agora é escrito pensando se o formulario está sendo enviado
function Button() {
    const isFormSubmitting = true
  
    return (
      <button disabled={isFormSubmitting}>
        <span></span>

        {/* problema de semântica foi CORRIGIDO */}
        {/* leitura: se o formulario está sendo enviado, então escreve carregando, senão escreve enviar*/}
        {isFormSubmitting ? 'Carregando' : 'Enviar'}
      </button>
    )
}