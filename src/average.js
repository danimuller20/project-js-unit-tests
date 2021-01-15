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
// let notas = [10, 8]

const isNotEmpty = array => (array.length ? true : false);
console.log(isNotEmpty([]));
const isNumber = array => {
	let bool = true;
	for (let index = 0; index < array.length; index += 1) {
		if (typeof array[index] !== 'number') {
			bool = false;
		}
	}
	return bool;
}

console.log(isNumber(['7']));
const average = array => {
	let somatoria = 0;
	if (!isNotEmpty(array) || !isNumber(array)) {
		return undefined;
	}
	for (let index = 0; index < array.length; index += 1) {
		somatoria += array[index];
	}
	return Math.round(somatoria / array.length);
};

console.log(average([10]));

// console.log(isNotEmpty([]))

module.exports = average;

// console.log(isEmpty([]));
