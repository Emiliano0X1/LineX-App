"use client";

import React, {useState, useContext, createContext, Children} from "react";

type ContainerProps = {
    children : React.ReactNode;
}

type TypeExContentType = {
    pageDash: string,
    setPageDash: React.Dispatch<React.SetStateAction<string>>,
    managePages: (pageName: string) => void
}

const typeExContextState: TypeExContentType = {
    pageDash: "",
    setPageDash: () => {},
    managePages: () => {}
}

const ComponentContext = createContext<TypeExContentType>(typeExContextState)

const ComponentProvider = (props: ContainerProps) => {
    const [pageDash, setPageDash] = useState(" ");

    const managePages = (pageName: string) => {
        setPageDash(pageName);
    };

    return (
        <ComponentContext.Provider value={{ pageDash, setPageDash, managePages }}>
            {props.children}
        </ComponentContext.Provider>
    );

}


const usePages = () => useContext(ComponentContext);

export {ComponentProvider,usePages}
