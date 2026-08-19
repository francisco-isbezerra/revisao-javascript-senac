/*
  EXERCÍCIO 05 — CALCULADORA UTILIZANDO FUNÇÕES
*/

function somar(a, b) {
  return a+b
}

function subtrair(a, b) {
  return a-b
}

function multiplicar(a, b) {
  return a*b
}

function dividir(a, b) {
  return a/b
}

function calcular(a, b, operacao) {
  if (operacao === 'somar'){
    return somar(a,b)
  }else if (operacao === 'subtrair'){
    return subtrair(a,b)
  } else if (operacao === 'multiplicar'){
    return multiplicar(a,b)
  }else if (operacao === 'dividir'){
    return dividir(a,b)
  }else{
    return"erro! operação invalida"
  }

  //a melhor solução seria um switecase
}

// TODO:
// Faça alguns testes com calcular().
