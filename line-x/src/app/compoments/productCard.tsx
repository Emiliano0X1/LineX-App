import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InfoCard from "./infoCard";

type product = {
    name : string
    imageURL : string
}

export default function ProductoCard({name,imageURL} : product) {
    return(
        <div className="p-4 flex flex-row items-end w-full gap-4">
            <div className="w-1/4">
                <Card className="h-44">
                    <CardHeader>
                        <CardTitle className="text-center">{name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <img src={imageURL} alt={name} className="w-20 h-auto" />
                    </CardContent>
                </Card>
            </div>

            <div className="w-1/6 flex flex-col items-center">
                <h4 className="mb-4 text-center">Tipo de Producto</h4>
                <Card className="h-24 w-full flex items-center justify-center">
                    <CardTitle className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-2xl">Industrial</CardTitle>
                </Card>
            </div>

            <InfoCard numero="459k" title="Stock"></InfoCard>
            <InfoCard numero="345k" title="Ordenes"></InfoCard>
            <InfoCard numero="123k" title="Ingresos"></InfoCard>
        </div>
    )
}