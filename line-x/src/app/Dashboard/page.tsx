"use client";

import React, { useState } from "react";
import SideBar from "../compoments/sideBar";
import LineXLines from "../Linex_line/page";
import ProductInfo from "../ProductInfo/page";
import Header from "../compoments/header";

export default function DashBoard(){

    const[selectedScreen, setSelectedScreen] = useState()

    const screens = [

    ]

    return (
        <div className="bg-slate-300 flex flex-row">
            <SideBar name="Emiliano Gonzalez" email="egp2506@gmail.com"></SideBar>
            <div className="flex-1 flex flex-col">
                <div className="w-full">
                    <Header name="Emiliano Gonzalez" userType="CEO" nameCompany="L.A Chetto"></Header>
                </div>
                <ProductInfo></ProductInfo>
            </div>    
        </div>
    )
}   