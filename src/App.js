import './App.css';
import './partials/_variaveis.css';
import './partials/_reset.css';
import Cabecalho from './components/Cabecalho';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Banner/>
    </div>
  );
}

export default App;
