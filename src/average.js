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
  let sum = 0;
  let result;
  let notError = true;
  array.forEach(() => {
    if (typeof array === 'number') {
      sum += array;
    } else {
      notError = false;
    }
  });
  if (notError) {
    result = sum / array.length;
    result = result.toFixed(0);
    result = Number(result);
  }
  return result;
};

module.exports = average;

// function verify(array) {
//   let sum = 0;
//   let notError = true;
//   if (typeof array === 'number') {
//     sum += array;
//   } else {
//     notError = false;
//   }
// }


// function test(array){
//   let sum = 0;
//   let result;
//   let notError = true;
//   // for (let index = 0; index <= array.length; index += 1) {
//   //   if (array.length === 0 || array.length !== index) {
//   //     if (typeof array[index] === 'number') {
//   //       sum += array[index];
//   //     } else {
//   //       notError = false;
//   //     }
//   //   }
//   // }
//   array.forEach(verify);
//   if (notError) {
//     result = sum / array.length;
//     result = result.toFixed(0);
//     result = Number(result);
//   }
//   console.log(result);
//   return result;
// };

// test([3, 2, 23]);
