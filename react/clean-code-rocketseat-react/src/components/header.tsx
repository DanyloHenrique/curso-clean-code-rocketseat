
/* --------------------------function createTodo--------------------------
    - Gera dependencia
    Muito possívelmente a função createTodo precisaria de algum dado do contexto
    Exemplo: se ela precisasse da lista atual de TODOs
    Isso significa que geramos um componente que é dependente do componentes pai (App)

    - Uso ideal
    o recomentado é criar componentes independetes para resultar em um código com baixa acoplamento
    para evitar que problemas de um componente resulte em problemas em outros componentes.

    "Um componente que depende do seu componente pai não foi desacoplado, só foi separado em outro arquivo"

    - Correção
    recebendo a função como parametro, garantimos que o componente Header funcione dentro de qualquer componentes desde que receba
    a função como parametro
*/

//criação de interface para dizer que o Header recebe como parametro uma tipagem que contem uma função com retorno void
interface HeaderProps {
    onCreateNewTodo: VoidFunction
} 

// versão com alto acoplamento (evitar)
/* 
export default function Header() {

    function createTodo() {
        //chamada para API
    }
*/

// versão com baixo acoplamento (Melhor metodo)
export default function Header({ onCreateNewTodo }: HeaderProps) {

  return (
    <header>
      <h1>My new innovate to-do list!</h1>
      {/* passado para onClick a função recebida como parametro */}
      <button onClick={onCreateNewTodo}>Add new todo</button>
    </header>
  );
}
