import { createContext, useState } from "react";

export const TemaContext = createContext();

export const TemaContextProvider = ({children})=>{

    const [temaEscuro,setTemaEscuro] = useState(false);

    return (        
        <TemaContext.Provider value={{temaEscuro,setTemaEscuro}}>
            {children}
        </TemaContext.Provider>
    );
};