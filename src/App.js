import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './componentes/home/Home';
import Menu from './componentes/Menu/Menu';
import Reservas from './componentes/reservas/Reservas';
import Navegacion from './componentes/navegador/Navegador';
import Footer from './componentes/footer/Footer'


function App() {

  return (
    <div className="App">
      <Navegacion />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Menu' element={<Menu />}></Route>
        <Route path='/Reservas' element={<Reservas />}></Route>
        <Route path='/Conocenos' element={<Menu />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
