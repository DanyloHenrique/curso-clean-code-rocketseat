import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import InputOld from "./components/input.old";
import * as Input from "./components/input";

/* ---------------------------INTRODUÇÃO------------------------------------
Nesse arquivo são feitas as alterações descritas e realizadas durante no curso Clean Code
*/

/* ---------------------------DESACOPLAMENTO------------------------------------
1- Quando desacoplar
- Quando há algo repetitivo
- Quando algo pode ser isolado do seu contexto: Quando uma parte do javascript está associado só a uma pequena parte da interface

2- Dica para não desacoplar em excesso
- Quando algo se repete pouco (não prejudicando a leitura do arquivo) e não tem uma lógica Javascript para ele

3- Vão ser desacoplados:
- Footer: tem a const currentYear só para ele
- Header: 
*/

export function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const isTodoListEmpty = (todos.length === 0)

  return (
    <div>
      {/* Necessário passar para o header qual é a função de criação de um novo TODO */}
      <Header onCreateNewTodo={() => {}} />

      {/* INPUT CRIADO USANDO O CONFIGURAÇÃO */}
      <InputOld
        label="Nome"
        errorMessage="Digite seu nome corretamente"
        icon={<div />}
      />

      {/* INPUT CRIADO USANDO O PATTERN DE COMPOSIÇÃO
    ICON ANTES DO INPUT */}
      <Input.Root>
        <Input.Label htmlFor="name" id="name-label"/>

        <Input.Icon>
          <span />
        </Input.Icon>

        <Input.FormField />

        <Input.ErrorMessage message="Digite seu nome corretamente" />
      </Input.Root>

      {/* INPUT CRIADO USANDO O PATTERN DE COMPOSIÇÃO
    ICON DEPOIS DO INPUT */}
      <Input.Root>
        <Input.Label />

        <Input.FormField />

        <Input.Icon>
          <span />
        </Input.Icon>

        <Input.ErrorMessage message="Digite seu nome corretamente" />
      </Input.Root>

      <main>
        <h2>Advantages</h2>

        <section>
          {/*  
            Div se repete apenas uma vez e não tem logica javascript, não é necessária separa-la em um componente diferente 
          */}
          <div>
            <h3>Blazing fast</h3>
            <p>This to-do list app is insanely fast.</p>
          </div>

          <div>
            <h3>No CSS</h3>
            <p>Clean and flat design with no CSS </p>
          </div>
        </section>

        <ul>
          {todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>

        {isTodoListEmpty && (
          <p>Nenhum todo cadastrado</p>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
