/*
  EXERCÍCIO 08 — CATÁLOGO DE PRODUTOS
*/

// TODO:
// Crie um array chamado produtos com pelo menos 5 objetos.
//
// Cada produto deve possuir:
// id
// nome
// preco
// categoria
// emEstoque

const produtos = [
  {
    id: 1,
    nome: "Smartphone X",
    preco: 2500.00,
    categoria: "Eletrônicos",
    emEstoque: true
  },
  {
    id: 2,
    nome: "Notebook Pro",
    preco: 4800.50,
    categoria: "Informática",
    emEstoque: true
  },
  {
    id: 3,
    nome: "Fone de Ouvido Bluetooth",
    preco: 299.90,
    categoria: "Acessórios",
    emEstoque: false
  },
  {
    id: 4,
    nome: "Cadeira Ergonômica",
    preco: 850.00,
    categoria: "Móveis",
    emEstoque: true
  },
  {
    id: 5,
    nome: "Teclado Mecânico",
    preco: 350.00,
    categoria: "Informática",
    emEstoque: false
  }
];

// TODO:
// Percorra o array com for, for...of ou forEach().

// TODO:
// Para cada item, mostre no console uma frase formatada
// contendo as informações do produto.

for(const prod of produtos){
  let message = `${prod.id} - ${prod.nome}
  | Categoria: ${prod.categoria}
  | Categoria: ${prod.preco}
  | Categoria: ${prod.emEstoque? 'SIM':'NÃO'} `

  console.log(message)
}