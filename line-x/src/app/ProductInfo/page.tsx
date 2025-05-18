import { Card } from "@/components/ui/card";
import ProductoCard from "../compoments/productCard";

export default function ProductInfo(){
    return(
        <div className="w-5xl bg-white ml-10 mr-10 mt-5 rounded-xs ">
            <ProductoCard name="Pieza de Lego" imageURL="/images/lego.png"></ProductoCard>
        </div>
    )
}