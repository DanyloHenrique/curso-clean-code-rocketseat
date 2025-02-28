import { useState } from "react";
import "./App.css";

/* ---------------------------INTRODUÇÃO------------------------------------
esse é o arquivo de inicio do módulo 2, antes de serem feitas as anotações.
Vão ser colocado aqui os comentarios das dicas dadas pelo Diego 
*/

export function AppInitial() {
  const [todos, setTodos] = useState<string[]>([]);

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <header>
        <h1>My new innovate to-do list!</h1>
        <button onClick={() => {}}>Add new todo</button>
      </header>

      <main>
        <h2>Advantages</h2>

        <section>
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

        {/* Evitar usar condicionais na camada de HTML
        Criar a verificação num booleano na camada javascript */}
        {todos.length === 0 && <p>Nenhum todo cadastrado</p>}
      </main>

      <footer className="read-the-docs">
        Copyright &copy; Rocketseat {currentYear}
      </footer>
    </div>
  );
}

export default AppInitial;
