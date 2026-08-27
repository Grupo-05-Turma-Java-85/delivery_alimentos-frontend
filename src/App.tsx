import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

import Home from './pages/home/Home'

import ListaCategoria from './components/categoria/listacategoria/ListaCategoria'

import LojistaHome from './pages/lojistahome/LojistaHome'

import ListaProduto from './components/produto/listaproduto/ListaProduto'

import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria'
import Contatos from './pages/contato/Contato'
import Sobre from './pages/sobre/Sobre'

function App() {

  return (

    <>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route
            path="/contato"
            element={<Contatos />}
          />
          <Route
            path="/sobre"
            element={<Sobre />}
          />
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/categorias"
            element={<ListaCategoria />}
          />

          <Route
            path="/categorias/modificar"
            element={<ListaCategoria modoEdicao={true} />}
          />

          <Route
            path="/produtos"
            element={<ListaProduto />}
          />

          <Route
            path="/logistahome"
            element={<LojistaHome />}
          />

          <Route
            path="/deletarcategoria/:id"
            element={<DeletarCategoria />}
          />

        </Routes>

        <Footer />

      </BrowserRouter>

    </>

  )
}

export default App