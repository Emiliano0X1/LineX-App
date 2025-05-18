import { Card, CardTitle } from "@/components/ui/card"

type info = {
    numero : string,
    title : string
}

export default function InfoCard({numero,title} : info){
    return(
       <div className="w-1/6 flex flex-col items-center">
            <h4 className="mb-4 text-center">{title}</h4>
            <Card className="h-24 w-full flex items-center justify-center">
                <CardTitle className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-2xl">{numero}</CardTitle>
            </Card>
        </div>
    )   
}