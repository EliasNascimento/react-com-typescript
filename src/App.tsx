import "./App.css";

// 4 - importação de componentes
import FirstComponent from "./components/FirstComponent";

// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

// 8 - Type
type textOrNull = string | null;

function App() {
  // 1 - variáveis
  const name: string = "João";
  const age: number = 38;
  const isWorking: boolean = false;

  // 2 - funçoes
  const userGreeting = (
    name: string,
    age: number,
    isWorking: boolean,
  ): string => {
    return `Olá, ${name}, você tem ${age} anos e atualmente
    ${isWorking ? "está trabalhando!" : "não está trabalhando!"}
    `;
  };

  // 8 - type
  const myText: textOrNull = "Tem Algum texto.";
  let mySecontText: textOrNull = null;

  mySecontText = "Olá.";

  return (
    <div className="App">
      <header className="App-header">
        <h1>React com TypeScript</h1>
        <p>Nome: {name}</p>
        <p>Idade: {age}</p>
        {isWorking && (
          <div>
            <p>Está trabalhando!</p>
          </div>
        )}
        <h3>{userGreeting(name, age, isWorking)}</h3>

        <FirstComponent />
        <SecondComponent name="Elias" />
        <Destructuring
          title="TypeScript"
          content="Algum conteúdo sobre TypeScript."
          commentsQty={10}
          tags={["ts", "js", "react"]}
          category={Category.TS}
        />
        <Destructuring
          title="Python"
          content="Algum conteúdo sobre Python."
          commentsQty={10}
          tags={["ts", "js", "react"]}
          category={Category.P}
        />
      </header>
    </div>
  );
}

export default App;
