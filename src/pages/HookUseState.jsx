import { useState } from "react"

const HookUseState = () => {
  
  const [nome,setNome] = useState("Levi");

  return (
    <div>

      <h1 className="text-xl font-bold mb-5">useState</h1>
      <ul className="list-disc list-inside">
        <li>O principal próposito é gerenciar valores.</li>
        <li>Podemos consultar um valor e alterar.</li>
        <li>Isso permite re-renderizar um componente, o que não acontece com a manipulação de variáveis.</li>
      </ul>

      <div>

        <h1 className="text-xl font-bold my-5">Exemplo:</h1>
        <ul className="list-disc list-inside">
          <li>const [nome,setNome] = useState("Levi");</li>
          <li>No onClick do botão {`()=>{setNome(nome==="Levi"?"Jader":"Levi")`}</li>
          <li>No onClick do botão {`value={nome} onChange={(e)=>{setNome(e.target.value)}`}</li>
        </ul>

        <p className="my-5 font-bold">{nome}</p>
        <button onClick={()=>{setNome(nome==="Levi"?"Jader":"Levi")}} className="bg-gray-600 hover:bg-gray-700 rounded-xl shadow-md px-3 py-1 hover:scale-110 hover:cursor-pointer text-gray-300" >
          Mudar nome
        </button>
        <input 
          type="text" 
          placeholder="nome"
          value={nome}
          onChange={(e)=>{setNome(e.target.value)}}
          className="border-1 rounded-xl px-3 py-1 ms-3"
        />

      </div>

    </div>
  )
}

export default HookUseState