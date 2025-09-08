import { NavLink,useLocation } from "react-router-dom";
import { useState,useEffect } from "react";

const NavBar = () => {

    const [collapse, setCollapse] = useState(false);
    const location                = useLocation();

    const classLiMenu        = "hover:bg-gray-700 transition duration-500";
    const classNavLink       = "block w-full p-3 ";
    const classNavLinkActive = "block w-full p-3 font-bold";

    useEffect(()=>{
        setCollapse(false)
    },[location]);

    return (
        <>
            <header className="bg-gray-800 shadow-md relative z-30">
                <nav className="w-full px-3 py-2 z-20">
                    <button 
                        className="bg-gray-600 hover:bg-gray-700 rounded-xl shadow-md px-3 py-1 hover:scale-110 hover:cursor-pointer" 
                        onClick={() => { setCollapse(!collapse) }}
                    >
                        &#9776;
                    </button>
                    <ul className={`fixed flex flex-col top-12 left-0 h-full w-64 bg-gray-800 shadow-md transition-transform duration-500 z-30 ${collapse ? "translate-x-0" : "-translate-x-full"}`}>
                        <li className={classLiMenu}>
                            <NavLink to={`/hook_usestate`} className={({isActive})=> isActive ?classNavLinkActive :classNavLink}>useState</NavLink>
                        </li>
                        <li className={classLiMenu}>
                            <NavLink to={`/hook_useeffect`} className={({isActive})=> isActive ?classNavLinkActive :classNavLink}>useEffect</NavLink>
                        </li>
                        <li className={classLiMenu}>
                            <NavLink to={`/hook_usereducer`} className={({isActive})=> isActive ?classNavLinkActive :classNavLink}>useReducer</NavLink>
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