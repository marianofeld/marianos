import './tailwind.css'
import Footer from './Componentes/Footer'
import Navbar from './Componentes/Navbar'
import Productos from './Componentes/Productos'
import Categorias from './Componentes/Categorias'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className='w-full flex'>
        <Categorias />
        <Routes>
          <Route path="/inicio" element={<Productos />} />
          <Route path="*" element={<Productos />} />
        </Routes>
      </div >
      <Footer />
    </BrowserRouter>
  )
}

export default App
