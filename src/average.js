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
function verifyNumbers(item) {
  let itemMedia = 0;
  let numberInteger = 0;
  if (typeof (item) !== 'numeric') {
    return undefined;
  }

  if ((typeof (arrayAverage) !== 'function') || (arrayAverage.lenght < 0)) {
    return undefined;
  }

  const isNumeric = arrayAverage.find(!'numeric');
  if (isNumeric) {
    return undefined;
  }

  itemMedia = item.toFixed(0);
  numberInteger += itemMedia;
  return numberInteger;

  const average = (arrayAverage) => {
    let integerNumber = numberInteger;
    validation(arrayAverage);
    verifyNumbers(item);
  };

  arrayAverage.forEach(verifyNumbers);
}

module.exports = average;
