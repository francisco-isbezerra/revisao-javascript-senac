/*
  EXERCÍCIO 06 — ARROW FUNCTIONS
*/

// TODO:
// Reescreva as funções abaixo utilizando arrow functions.

//const somar = (parametos) => a+b
const somar = (a,b) => a+b
const subtrair = (a,b) => a-b
const multiplicar = (a,b) => a*b
const dividir = (a,b) => b===0?'erro':a/b

const calcular = (a,b,operacao) => {
 if (operacao === 'soma') return somar(a,b);
 if (operacao === 'subtrair') return subtrair(a,b);
 if (operacao === 'multiplicar') return multiplicar(a,b);
 if (operacao === 'dividir') return dividir(a,b);

 return "operação invalida"
  
}

// TODO:
// Identifique quais funções podem utilizar retorno implícito.

// TODO:
// Crie uma arrow function calcular() mantendo o comportamento do exercício anterior.

//Exemplo de arrowfuncrion Const soma=()=>a+b