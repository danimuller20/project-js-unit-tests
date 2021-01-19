/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const validateArray = (array) => {
  let isValid = true;

  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] === 'string') {
      isValid = false;
    }
  }

  if (array.length === 0) {
    isValid = false;
  }

  return isValid;
};

const average = (array) => {
  const isValid = validateArray(array);
  let toBeReturned;

  if (isValid === true) {
    let sum = 0;

    for (let i = 0; i < array.length; i += 1) {
      sum += array[i];
    }

    toBeReturned = sum / array.length;
  }

  return toBeReturned;
};

module.exports = average;

console.log(average([3, 4, 5]))