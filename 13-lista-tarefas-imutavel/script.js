/*
  EXERCÍCIO 13 — LISTA DE TAREFAS IMUTÁVEL
*/

const tarefas = [
  { id: 1, titulo: "Estudar JavaScript", concluida: false },
  { id: 2, titulo: "Praticar arrays", concluida: false },
  { id: 3, titulo: "Revisar funções", concluida: true },
];
console.log(JSON.stringify(tarefas, null, 2))


function adicionarTarefa(lista, novaTarefa) {
  // TODO:
  // Retorne um NOVO array incluindo novaTarefa.
  return[
    ...tarefas,
    novaTarefa
  ]
  
}

function concluirTarefa(lista, id) {
  // TODO:
  // Retorne um NOVO array.
  // Altere apenas a tarefa correspondente ao id.
  return lista.map((tarefa)=>
    tarefa.id == id
    ? {...tarefa,concluida: true}
    : tarefa
  )
}

function removerTarefa(lista, id) {
  // TODO:
  // Retorne um NOVO array sem a tarefa informada.
  return lista.filter((tarefa) => tarefa.id !== id);
}
//const ListaSemTarefa = removerTarefa(tarefas,2)
//console.log(JSON.stringify(ListaSemTarefa, null, 2))
const comNovaTarefa = adicionarTarefa(tarefas, {
  id:4,
  titulo: "estudar imutabilidae",
  Concluida: false,
});

const comTarefaConcluida = concluirTarefa(comNovaTarefa, 2);
const semPrimeiraTarefa = removerTarefa(comTarefaConcluida, 1);

// TODO:
// Teste as três funções sem alterar diretamente tarefas.
