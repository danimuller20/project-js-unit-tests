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
const checkArrayType = (array) => {
  for (let i = 0; i < array.lenght; i += 1) {
  if (typeof array[i] !== 'number') {
    return false;
  }
}
  return true;
};

const checkArrayNumber = (array) => {
  if (Array.isArray(array) && array.length > 0 && checkArrayType(array)) {
    return true;
  }
  return false;
};

const average = (array) => { 
  if (checkArrayNumber(array)) {
  let sum = 0;
  let averageNumbers = 0;
    for (let index = 0; index < array.length; index += 1) {
    sum += array[index];
  }
  averageNumbers = sum / array.length;
  return Math.round(averageNumbers);
}
  return undefined;
};

module.exports = average;
