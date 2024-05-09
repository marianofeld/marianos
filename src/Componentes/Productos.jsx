import mercaderia from './mercaderia.js'
import { useEffect, useState } from 'react'

export const Productos = () => {
    const [productos, setProductos] = useState([])


    const datos = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mercaderia)
            }, 3000);

        })
    }

    useEffect(() => {
        datos()
            .then((positivo) => {
                setProductos(positivo)

            })
    }, [])




    return (
        <div className="flex flex-wrap gap-4 ml-20">
            {productos.map((prod) => (
                <div key={prod.id} className="border-black min-w-60 max-w-60 max-h-80 min-h-72 mx-2 overflow-hidden shadow-2xl">
                    <div className={`${prod.color} h-48 w-full rounded-lg`}></div>
                    <div className="p-4">
                        <div className="uppercase tracking-wide text-l font-semibold text-black">{prod.nombre}</div>
                        <p className="mt-2 text-m text-gray-600">{prod.descripcion}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}



export default Productos