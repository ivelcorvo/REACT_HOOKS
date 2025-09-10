import { useTemaContext } from "../hooks/useTemaContext";

const HookUseContext = () => {

  const {temaEscuro,setTemaEscuro} = useTemaContext();

  return (
    <div>

      <h1 className="text-xl font-bold mb-5">useContext</h1>
      <ul className="list-disc list-inside">
        <li>É um hook utilizado para acessar (ou consumir) valores de um contexto criado com a Context API.</li>
        <li>Criar contexto → {"createContext()"}</li>
        <li>Fornecer contexto → {"<Context.Provider>"}</li>
        <li>Consumir contexto → {"useContext()"}</li>
      </ul>

      <div >

        <h1 className="text-xl font-bold my-5">Exemplo:</h1>
        <p className="my-2">Vamos precisar criar o contexto e também o Provider.</p>          
        <div className="w-full overflow-x-auto">
          <img src={process.env.PUBLIC_URL + "/createContextPt1.png"}  alt="createContextPt1" className="min-w-max block shadow-md rounded-md"/>
        </div>
        <p className="my-2">Agora vamos fazer um custom hook para facilitar o uso do context.</p>          
        <div className="w-full overflow-x-auto">
          <img src={process.env.PUBLIC_URL + "/createContextPt2.png"}  alt="createContextPt2" className="min-w-max block shadow-md rounded-md"/>
        </div>
        <p className="my-2">É necessário "encapsular", com o Provider, onde usaremos o context. Neste caso, como vamos utilizar no sistema todo, faremos em index.js.</p>          
        <div className="w-full overflow-x-auto">
          <img src={process.env.PUBLIC_URL + "/createContextPt3.png"}  alt="createContextPt3" className="min-w-max block shadow-md rounded-md"/>
        </div>
        <p className="my-2">Importamos o custom hook e utilizamos o conteúdo que passamos para o Provider.</p>          
        <p className="my-2 font-bold">{`const {temaEscuro,setTemaEscuro} = useTemaContext();`}</p>
        <p className="my-2">No onClick dobotão abaixo: </p>
        <p className="my-2 font-bold">{`()=>{setTemaEscuro(!temaEscuro)}`}</p>
        <p className="my-2">Como estamos utilizando Tailwind no sistema, utilizamos logica nas className. algo mais ou menos assim: </p>
        <p className="my-2 font-bold">{'className={`${(temaEscuro)?"bg-gray-900":"bg-gray-300"}`}'}</p>

        <button onClick={()=>{setTemaEscuro(!temaEscuro)}} className="bg-gray-600 hover:bg-gray-700 rounded-xl shadow-md px-3 py-1 hover:scale-110 hover:cursor-pointer text-gray-300 mt-5">
          {(temaEscuro)?<i className="fa-solid fa-sun"></i>:<i className="fa-solid fa-moon"></i>}
        </button>

      </div>

    </div>
  )
}

export default HookUseContext