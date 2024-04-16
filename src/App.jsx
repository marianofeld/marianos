import './tailwind.css'
import Footer from './Componentes/Footer'
import Navbar from './Componentes/Navbar'
import Productos from './Componentes/Productos'
import Categorias from './Componentes/Categorias'

function App() {

  return (
    <>
      <Navbar />
      <div className='w-full flex'>
        <Categorias />
        <Productos />
      </div >
      <Footer />
    </>
  )
}

export default App
