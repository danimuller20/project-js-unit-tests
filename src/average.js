/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.X
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.X
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  let total = 0;

  for (const iterator of array) {
    if (typeof iterator !== 'number' || iterator === '') {
      undefined;
    }
    total += iterator;
  }
  const averageTotal = Math.round(total / array.length);
  return averageTotal;
};

// console.log(average([2, 2]));
// console.log(average([1, 1]));
// console.log(average([1, '2']));
module.exports = average;
