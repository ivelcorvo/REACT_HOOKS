import { useEffect,useState,usestate } from "react"

const HookUseEffect = () => {
  
  const [contador,setContador] = useState(0);
  
  useEffect(()=>{
    console.log(`Você clicou: ${contador} vezes`);
  },[contador]);

  return (
    <div>

      <h1 className="text-xl font-bold mb-5">useEffect</h1>
      <ul className="list-disc list-inside">
        <li>Permite controlar quantas vezes algo acontece.</li>
        <li>Recebe uma função a ser execudata e um array de dependências.</li>
        <li>Se você deixar [] vazio, roda só uma vez (quando o componente montar).</li>
        <li>Se colocar variáveis no array, roda sempre que elas mudarem.</li>
      </ul>

      <div>

        <h1 className="text-xl font-bold my-5">Exemplo:</h1>
        <ul className="list-disc list-inside">
          <li>OBS: abra o console (F12).</li>
          <li>Criamos um contador: const [contador,setContador] = useState(0); onde [contador] vai ser uma dependencia do useEffect.</li>
          <li>Dentro do useEffect {"()=>{console.log(`Você clicou: ${contador} vezes`);}"}</li>
          <li>No onClick do botão {`()=>{setContador(contador+1)}`}</li>
          <li>Irar rodar toda vez que contador for alterado.</li>
        </ul>

        <button onClick={()=>{setContador(contador+1)}} className="bg-gray-600 hover:bg-gray-700 rounded-xl shadow-md px-3 py-1 hover:cursor-pointer text-gray-300 mt-5" >
          Adicionar +1
        </button>

      </div>

    </div>
  )
}

export default HookUseEffect