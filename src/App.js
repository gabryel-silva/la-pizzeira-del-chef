import './App.css';
import './partials/_variaveis.css';
import './partials/_reset.css';
import Cabecalho from './components/Cabecalho';
import Banner from './components/Banner';
import OfertasDaSemana from './components/OfertasDaSemana';

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Banner/>
      <OfertasDaSemana/>
    </div>
  );
}

export default App;
