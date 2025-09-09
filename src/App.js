import { BrowserRouter,Routes,Route } from "react-router-dom";

// #### PAGES ####
  import HookUseState from "./pages/HookUseState";
  import HookUseEffect from "./pages/HookUseEffect";
  import HookUseReducer from "./pages/HookUseReducer";

// #### COMPONENTS ####
  import NavBar from "./components/NavBar";

// #### HOOKS ####
import { useTemaContext } from "./hooks/useTemaContext";

// ##### CONTEXT #####

function App() {
  // #### TEMA ####
    const {temaEscuro} = useTemaContext();

  return (
    <div className={`${(temaEscuro)?"bg-gray-900 text-gray-300":"bg-gray-300 text-gray-800"} flex flex-col min-h-screen p-0 m-0`}>
      <BrowserRouter>
        <NavBar></NavBar>
        <div className="px-5 py-20">
          <div className={`${(temaEscuro)?"bg-gray-800":"bg-gray-100"} max-w-150 rounded-md shadow-xl mx-auto p-10`}>
            <Routes>
              <Route path="/hook_usestate"   element={<HookUseState/>}></Route>
              <Route path="/hook_useeffect"  element={<HookUseEffect/>}></Route>
              <Route path="/hook_usereducer" element={<HookUseReducer/>}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
