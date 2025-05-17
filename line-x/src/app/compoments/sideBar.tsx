import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { AvatarImage } from "@radix-ui/react-avatar"

type user = {
    name : string,
    email : string,
}

export default function SideBar({name,email} : user){
    return(
        <div className="bg-cyan-900 w-1/5 h-screen">
            <div className="flex justify-center">
                <Avatar className="mt-10 h-30 w-30">
                    <AvatarImage src="/images/kenny2.jpg" alt="FotoDePerfil"></AvatarImage>
                    <AvatarFallback>EG</AvatarFallback>
                </Avatar>
            </div>

            <div className="mt-6 text-center">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-white">{name}</h4>
                <p className="text-sm text-white">{email}</p>
            </div>

            <div className="mt-18 flex flex-col justify-center items-center">
                <Button variant="outline" className="w-full p-6 rounded-r-none bg-slate-300 border-slate-300 hover:bg-slate-300 hover:border-slate-300 text-cyan-900 hover:text-cyan-900 ">Dashboard</Button>
                <Button variant="outline" className="w-full p-6 rounded-none bg-cyan-900 border-cyan-900 hover:bg-cyan-900 hover:border-cyan-900 text-slate-300">Line X Lines</Button>
                <Button variant="outline" className="w-full p-6 rounded-none bg-cyan-900 border-cyan-900 hover:bg-cyan-900 hover:border-cyan-900 text-slate-300" >Predicciones</Button>
                <Button variant="outline" className="w-full p-6 rounded-none bg-cyan-900 border-cyan-900 hover:bg-cyan-900 hover:border-cyan-900 text-slate-300">Ayuda</Button>
                <Button variant="outline" className="w-full p-6 rounded-none bg-cyan-900 border-cyan-900 hover:bg-cyan-900 hover:border-cyan-900 text-slate-300">Configuracion</Button>

                <div className="mt-24">
                    <Button variant="outline" className="w-full p-6 rounded-none bg-cyan-900 border-cyan-900 hover:bg-cyan-900 hover:border-cyan-900 text-slate-300 hover:text-red-400">Cerrar Sesion</Button>
                </div>  
            </div>
        </div>
    )
}