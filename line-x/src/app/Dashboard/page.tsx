"use client";

import React, { useState } from "react";
import SideBar from "../compoments/sideBar";
import LineXLines from "../Linex_line/page";
import ProductInfo from "../ProductInfo/page";
import Header from "../compoments/header";
import { usePages } from "../context";

export default function DashBoard(){

    const pageDash = usePages();
    console.log(pageDash.pageDash)

      const pages = [ //Fuckin andy, aqui agrega los componentes de la pantalla de ayuda en donde van como yo le puse para la navegacion
        {label : <ProductInfo></ProductInfo>, value : "dashboard"},
        {label : <LineXLines></LineXLines>, value : "linexl"},
        {value : "predicciones"},
        {value : "ayuda"},
        {value : "config"}
    ]

    return (
        <div className="bg-slate-300 flex flex-row">
            <SideBar name="Emiliano Gonzalez" email="egp2506@gmail.com"></SideBar>
            <div className="flex-1 flex flex-col">
                <div className="w-full">
                    <Header name="Emiliano Gonzalez" userType="CEO" nameCompany="L.A Cetto"></Header>
                </div>
                {pages.find((page) => page.value === String(pageDash.pageDash))?.label}
            </div>    
        </div>
    )
}   