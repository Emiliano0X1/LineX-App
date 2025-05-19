import { Card, CardContent,CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import EndChart from "./endChart";


export default function MiddleCharts(){

    return(
        <div className="flex flex-col gap-5 w-2/3">
           <div className="flex flex-row gap-5 w-full">
            <div className="w-1/4">
                <Card className="h-48"> 
                    <CardHeader>
                        <CardTitle>Consumidores</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center ">
                        <Users size={40}></Users>
                        <p>151 k</p>
                        <p>Total de consumidores</p>
                    </CardContent>
                </Card>
            </div>
            <div className="w-3/4">
                <Card className="h-48">
                    <CardHeader>
                        <CardTitle>Calidad Actual</CardTitle>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>
            </div>  
            </div>

            <div className="w-full">
                <EndChart></EndChart>
            </div>


        </div>
    )
}