import { Switch } from "@/components/ui/switch"
import { Download } from "lucide-react"


type user = {
    name : string,
    userType : string
    nameCompany : string
}

export default function Header({name,userType, nameCompany} : user){
    return (
        <div className="flex justify-between bg-white">
            <div className="p-6">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Hola {userType}, {name}</h3>
            </div>

            <div className="p-6 flex flex-row items-center gap-x-4">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{nameCompany}</h3>
                <Switch />
                <p className="text-lg text-muted-foreground">Modo Oscuro</p>
                <Download size={30} className="ml-5"></Download>
            </div>
        </div>
    )
}