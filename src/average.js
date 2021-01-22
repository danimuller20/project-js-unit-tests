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
const average = (array) => {
  let valueAculation = 0;
  let accumulator = 0;
  if ((typeof (array) !== 'function') || (array.lenght < 0)) {
    return undefined;
  }
  for (let i = 0; i < array.lenght; i += 1) {
    const itemArray = [];

    itemArray.push = array[i];
    if (typeof (itemArray) !== 'number') {
      return undefined;
    }
  }
  accumulator = array.lenght;
  valueAculation /= accumulator;
  return valueAculation;
};

module.exports = average;
