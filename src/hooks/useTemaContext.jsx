import { TemaContext } from "../context/TemaContext";
import { useContext } from "react";

export const useTemaContext = ()=>{
    return useContext(TemaContext);
};