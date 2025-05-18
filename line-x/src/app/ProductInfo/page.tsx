import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import ProductoCard from "../compoments/productCard";
import MiddleCharts from "../compoments/middleCharts";
import EndChart from "../compoments/endChart";

export default function ProductInfo(){
    return(
      <div>
        <div className="w-5xl bg-white ml-10 mr-10 mt-5 rounded-xs ">
            <ProductoCard name="Pieza de Lego" imageURL="/images/lego.png"></ProductoCard>
        </div>

        <div className="flex flex-row gap-5 mt-5 ml-10 mr-10 items-start">
            <MiddleCharts></MiddleCharts>
                <div className="w-1/3">
                    <Card className="h-105">
                        <CardHeader>
                            <CardTitle>10 Compradores Mas activos</CardTitle>
                        </CardHeader>
                    </Card>
                </div>
        </div>
      </div>
    )
}