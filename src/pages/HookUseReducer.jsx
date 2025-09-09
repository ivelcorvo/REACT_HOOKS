import { useReducer,useState,usestate } from "react";

const HookUseReducer = () => {

  const tasksReducer = (state,action)=>{
    switch(action.type){
      case "ADICIONAR":
        return [...state,{id:Date.now(), texto:action.texto, feito:false}];
      case "ALTERAR":
        return state.map((tarefa)=>tarefa.id===action.id ? {...tarefa, feito: !tarefa.feito} :tarefa);
      case "REMOVER":
        return state.filter((tarefa)=>tarefa.id!==action.id);
      default:
        return state;
    };
  };

  const [tasks, dispatch] = useReducer(tasksReducer,[]);

  const [texto,setTexto]  = useState("");

  const handleSubimit = (e)=>{
    e.preventDefault();
    if(!texto){
      alert("Digite alguma tarefa.");
      return;
    }

    dispatch({type:"ADICIONAR",texto});
    setTexto("");
  };

  return (
    <div>

      <h1 className="text-xl font-bold mb-5">useReducer</h1>
      <ul className="list-disc">
        <li>Semelhante ao useState, porém temos a possibilidade de executar uma função na hora da alteração do valor.</li>
        <li>O useReducer recebe uma valor para gerenciar e uma função para alterar este valor.</li>
        <li>O estado é atualizado por uma função reducer, que decide como mudar o estado baseado na ação.</li>
        <li>Você dispara uma ação com dispatch().</li>
        <li>O dispatch sempre recebe um objeto chamado ação (action).</li>
        <li>Esse objeto geralmente tem pelo menos uma propriedade chamada type, que diz ao reducer o que fazer.</li>
        <li>Ele pode também carregar mais informações (payload), como id, texto, valor, etc.</li>
      </ul>

      <div className="overflow-x-scroll md:overflow-hidden">

        <h1 className="text-xl font-bold my-5">Exemplo:</h1>
        <div className="w-130 ">
          <img src="/cod_reducer_function_tasks.png" alt="cod_reducer_function_tasks" className="rounded-md shadow-md"/>
        </div>
        <ul className="list-disc">
          <li>const [tasks, dispatch] = useReducer(tasksReducer,initialTasks);</li>
          <li>No onClick do botão Adicionar {`()=>{dispatch({type:"ADICIONAR",texto})}`}</li>
          <li>No onClick do botão Altera {`()=>{dispatch({type:"ALTERAR",id:task.id})}`}</li>
          <li>No onClick do botão Excluir {`()=>{dispatch({type:"REMOVER",id:task.id})}`}</li>
        </ul>
        
        <h3 className="text-xl mt-5">Tarefas</h3>
        <form onSubmit={handleSubimit}>
          <div className="flex flex-row justify-between my-5">          
            <input 
              type="text" 
              placeholder="Digite a tarefa"
              value={texto}
              onChange={(e)=>{setTexto(e.target.value)}}
              className="border-1 rounded-xl px-3 py-1 ms-3"
            />
            <button type="submit" className="bg-gray-600 hover:bg-gray-700 rounded-xl shadow-md px-3 py-1 hover:scale-110 hover:cursor-pointer text-gray-300" >
              Adicionar
            </button>
          </div>
        </form>
        {tasks.map((task)=>(
          <div key={task.id} className="flex flex-row justify-between">
            <p className={`${(task.feito)?"line-through":""}`}>{task.texto} </p>
            <div className="mb-2">
              <button onClick={()=>{dispatch({type:"ALTERAR",id:task.id})}} className="bg-gray-600 hover:bg-gray-700 rounded-xl shadow-md px-3 py-1 hover:scale-110 hover:cursor-pointer text-gray-300 m-1" >
                Altera
              </button>
              <button onClick={()=>{dispatch({type:"REMOVER",id:task.id})}} className="bg-gray-600 hover:bg-gray-700 rounded-xl shadow-md px-3 py-1 hover:scale-110 hover:cursor-pointer text-gray-300 m-1" >
                Excluir
              </button>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default HookUseReducer