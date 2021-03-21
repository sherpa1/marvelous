import './App.css';
import CharacterMaster from './components/CharacterMaster';
import characters from "./data/characters";

function App() {
  return (
    <div className="App">
      <CharacterMaster characters={characters} />
    </div>
  );
}

export default App;
