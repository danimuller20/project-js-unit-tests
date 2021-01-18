/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos. [x]
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado. [x]
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1. [x]

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  let media;
  let sun = 0;
  if (array === [] || array === 0 || array === undefined || array === NaN) {
    return undefined;
  }
  for (let index = 0; index < array.length; index += 1) {
    if (typeof(array[index]) === "string") {
      return undefined;
    }
    sun += array[index];
  }
  media = Math.round(parseInt(sun) / parseInt(array.length));
  return media;
}

module.exports = average;
