import { Link } from 'react-router-dom'

export const Categorias= () => {


    return (
      <div className="w-1/5 ml-20">
        <h2 className="text-5xl font-bold mb-4">Categorías</h2>
        <div className="flex flex-col">
          <Link to={"/inicio"} className="bg-gray-200 p-4 rounded-md my-4">Todos</Link>
          <Link to={"/inicio"} className="bg-gray-200 p-4 rounded-md my-4">Colores primarios</Link>
          <Link to={"/inicio"} className="bg-gray-200 p-4 rounded-md my-4">Colores no primarios</Link>
          
        </div>
      </div>
    );
  };
  
  export default Categorias