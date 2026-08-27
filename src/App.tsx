import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

import Home from './pages/home/Home'

import ListaCategoria from './components/categoria/listacategoria/ListaCategoria'

import LojistaHome from './pages/lojistahome/LojistaHome'

import ListaProduto from './components/produto/listaproduto/ListaProduto'
import Contatos from './pages/contato/Contato'
import Sobre from './pages/sobre/Sobre'
import { ToastContainer } from 'react-toastify'
import FormCategoria from './components/categoria/formcategoria/FormCategoria'
import FormProduto from './components/produto/formproduto/FormProduto'

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
            path="/modificar-produtos"
            element={<ListaProduto modoEdicao={true} />}
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
            path="/categorias/cadastrar"
            element={<FormCategoria />}
          />

          <Route
            path="/produtos/cadastrar"
            element={<FormProduto />}
          />

        </Routes>

        <Footer />

        <ToastContainer />


      </BrowserRouter>

    </>

  )
}

export default App