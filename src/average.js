/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const undefinedArr = array => {
  let retorno = false;
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number') {
      retorno = true;
    }
  }
  if (array.length < 1) {
    retorno = true;
  }
  return retorno;
}

const average = (array) => {
  let count = 0;
  array.forEach(value => {
    count += value;
  });
  if (undefinedArr(array)) return undefined;
  count = Math.round(count / array.length);
  return count;
};

module.exports = average;
