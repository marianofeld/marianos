export const Productos = () => {
    const productos = [
        {
            nombre: "Rojo",
            id: 1,
            color: "bg-red-500",
            imagen: "https://via.placeholder.com/150",
            descripcion: "Este es un producto de color rojo."
        },
        {
            nombre: "Azul",
            id: 2,
            color: "bg-blue-500",
            imagen: "https://via.placeholder.com/150",
            descripcion: "Este es un producto de color azul."
        },
        {
            nombre: "Verde",
            id: 3,
            color: "bg-green-500",
            imagen: "https://via.placeholder.com/150",
            descripcion: "Este es un producto de color verde."
        },
        {
            nombre: "Amarillo",
            id: 4,
            color: "bg-yellow-500",
            imagen: "https://via.placeholder.com/150",
            descripcion: "Este es un producto de color amarillo."
        },
        {
            nombre: "Morado",
            id: 5,
            color: "bg-purple-500",
            imagen: "https://via.placeholder.com/150",
            descripcion: "Este es un producto de color morado."
        },
        {
            nombre: "Rosa",
            id: 6,
            color: "bg-pink-500",
            imagen: "https://via.placeholder.com/150",
            descripcion: "Este es un producto de color rosa."
        },
        {
            nombre: "Gris",
            id: 7,
            color: "bg-gray-500",
            imagen: "https://via.placeholder.com/150",
            descripcion: "Este es un producto de color gris."
        },
        {
            nombre: "Índigo",
            id: 8,
            color: "bg-indigo-500",
            imagen: "https://via.placeholder.com/150",
            descripcion: "Este es un producto de color índigo."
        },
        {
            nombre: "Verde Azulado",
            id: 9,
            color: "bg-teal-500",
            imagen: "https://via.placeholder.com/150",
            descripcion: "Este es un producto de color verde azulado."
        },
        {
            nombre: "Naranja",
            id: 10,
            color: "bg-orange-500",
            imagen: "https://via.placeholder.com/150",
            descripcion: "Este es un producto de color naranja."
        }
    ];



    return (
        <div className="container mx-auto mt-4 flex flex-wrap justify-center gap-4">
    {productos.map((prod) => (
        <div key={prod.id} className="border-black max-w-xs mx-2 my-2 overflow-hidden shadow-2xl">
            <div className={`${prod.color} h-48 w-full rounded-lg`}></div>
            <div className="p-4">
                <div className="uppercase tracking-wide text-sm font-semibold text-black">{prod.nombre}</div>
                <p className="mt-2 text-sm text-gray-600">{prod.descripcion}</p>
            </div>
        </div>
    ))}
</div>
    );

}

export default Productos