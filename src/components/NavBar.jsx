import { NavLink,useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import { useTemaContext } from "../hooks/useTemaContext";

const NavBar = () => {

    // #### TEMA ####
        const {temaEscuro,setTemaEscuro} = useTemaContext();

    // #### CLASSES ####
        const classLiMenu        = (temaEscuro)?"hover:bg-gray-700 transition duration-500":"hover:bg-gray-300 transition duration-500";
        const classNavLink       = "block w-full p-3 ";
        const classNavLinkActive = "block w-full p-3 font-bold";

    // #### COLLAPSE BTN MENU ####
        const [collapse, setCollapse] = useState(false);
        const location                = useLocation();
        useEffect(()=>{
            setCollapse(false)
        },[location]);

    return (
        <>        
            <header className={`${(temaEscuro)?"bg-gray-800":"bg-gray-100"} shadow-md relative z-30`}>
                <nav className="w-full px-3 py-2 z-20">
                    <div className="flex flex-row items-center justify-between">
                        <button 
                            className="bg-gray-600 hover:bg-gray-700 rounded-xl shadow-md px-3 py-1 hover:scale-110 hover:cursor-pointer text-gray-300" 
                            onClick={() => { setCollapse(!collapse) }}
                        >
                            &#9776;
                        </button>
                        <button onClick={()=>{setTemaEscuro(!temaEscuro)}} className="bg-gray-600 hover:bg-gray-700 rounded-xl shadow-md px-3 py-1 hover:scale-110 hover:cursor-pointer text-gray-300">
                            {(temaEscuro)?<i class="fa-solid fa-sun"></i>:<i class="fa-solid fa-moon"></i>}
                        </button>
                    </div>
                    <ul className={`${(temaEscuro)?"bg-gray-800":"bg-gray-100"} fixed flex flex-col top-12 left-0 h-full w-64 shadow-md transition-transform duration-500 z-30 ${collapse ? "translate-x-0" : "-translate-x-full"}`}>
                        <li className={classLiMenu}>
                            <NavLink to={`/`} className={({isActive})=> isActive ?classNavLinkActive :classNavLink}>Home</NavLink>
                        </li>
                        <li className={classLiMenu}>
                            <NavLink to={`/hook_usestate`} className={({isActive})=> isActive ?classNavLinkActive :classNavLink}>useState</NavLink>
                        </li>
                        <li className={classLiMenu}>
                            <NavLink to={`/hook_usereducer`} className={({isActive})=> isActive ?classNavLinkActive :classNavLink}>useReducer</NavLink>
                        </li>
                        <li className={classLiMenu}>
                            <NavLink to={`/hook_useeffect`} className={({isActive})=> isActive ?classNavLinkActive :classNavLink}>useEffect</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            {collapse && (
                <div className="fixed inset-0 bg-black/50 z-20" onClick={() => setCollapse(false)}/>
            )}
        </>
    )
}

export default NavBar