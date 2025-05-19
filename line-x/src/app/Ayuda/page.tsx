export default function AyudaScreen(){

    const botones = [
    {icon: "🔧", label:"Problemas tecnicos"},
    {icon: "⏳", label:"Producto atascado o no entregado"},
    {icon: "☁️", label:"Estado del sistema"},
    {icon: "🔄️", label:"Cancelar o reiniciar operación"},
    {icon: "🏷️", label:"Producto no disponible"},
    {icon: "❓", label:"Como usar Line-X"},
    {icon: "🛠️", label:"Mantenimiento"},
    {icon: "🛜", label:"Problemas de conexión"},
    {icon: "🎧", label:"Contactar soporte"}
    ];

    return(
        <>
        <h2 className="text-2xl font-semibold text-center mb-6">
        ¿Cómo podemos ayudarte, {`{USUARIO}`}?
        </h2>

        <div className="grid grid-cols-3 gap-4 ml-3 mr-3">
        {botones.map((boton, datos) => (
            <button key={datos} className="py-12 transition delay-0 duration-100 ease-in-out hover:-translate-y-1 hover:scale-101 shadow-md hover:shadow bg-gray-50 border border-gray-500 rounded-lg flex flex-wrap items-center justify-center p-4">
                <span className="text-2xl mr-2">{boton.icon}</span>
                <span>{boton.label}</span>
            </button>
        ))}
        </div>
        </>
    )
}