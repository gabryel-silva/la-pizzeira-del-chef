import './App.css';
import './partials/_variaveis.css';
import './partials/_reset.css';
import Header from './components/Cabecalho';
import ListaSuspensa from './components/ListaSuspensa';

function App() {
  const onClick = () => setIsActive(!isActive)

  return (
    <div className="App">
      <Header/>
      <ListaSuspensa/>
    </div>
  );
}

export default App;
