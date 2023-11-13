import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { PracticaTypescript } from './components/PracticaDatos/PracticaTypescript'
import { EdicionesUsuario } from './components/edicionesUsuario/EdicionesUsuario'
import { Navbar } from './components/Navbar/Navbar';
import { Historias } from './components/generadorHistorias/Historias';

function App() {


  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<PracticaTypescript />}></Route>
          <Route path='/edicionesUsuario' element={<EdicionesUsuario />}></Route>
          <Route path='/generadorHistorias' element={<Historias />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
