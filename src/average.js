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

const validateEmpty = (array) => {
  if (array.length === 0) {
    return undefined;
  } return 1;
};

const validateNumber = (array) => {
  for (index = 0; index < array.length; index +=1) {
    const posArray = array[index];
    if (typeof (posArray) !== 'number') {
      return undefined;
    }
  }
  return 1;
};
function validateAll(array) {
  if (validateEmpty(array) === 1 && validateNumber(array) === 1) {
    return 1;
  } return undefined;
}
const average = (array) => {
  if (validateAll(array) === 1) {
    let sum = 0;
    for (index = 0; index < array.length; index += 1) {
      sum += array[index];
    }
    return Math.round(sum / array.length);
  } return undefined;
};

console.log(average([]));

module.exports = average;
