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

const average = (listaNum) => {
  let soma = 0;
  // add your implementation here
  if (listaNum.length === 0) {
    return undefined;
  }
  for (let index = 0; index < listaNum.length; index += 1) {
    if (typeof listaNum[index] !== 'number') {
      return undefined;
    }
    soma += listaNum[index];
  }
  const media = Math.round(soma / listaNum.length);
  return media;
};

average([5, 10, 20]);

module.exports = average;
