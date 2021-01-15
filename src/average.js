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

// array.every(condição) = verifica em todo o array a condição
// estabelecida através de function ou arrow function

const average = (arr) => {
  const length = arr.length;
  let calc = 0;

  if ((length < 1) || (arr.every(currentValue => typeof currentValue === 'number') === false)) {
    return undefined;
  }

  for (let index = 0; index < length; index += 1) {
    calc += arr[index];
  }

  return Math.round(calc / length);
};

module.exports = average;
