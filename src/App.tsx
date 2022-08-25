import Counter from "./components/Counter";
import { Formulario } from "./components/Formulario";
import { User } from "./components/User";


function App() {
  return (
    <div className="m-5">
      <h1 className="text-center">Primeros pasos con TypeScript en React</h1>
      <Counter/>
      <User/>
    </div>
  );
}

export default App;
