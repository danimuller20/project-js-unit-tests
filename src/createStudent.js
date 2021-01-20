/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/

const createStudent = nome => ({ feedback: () => 'Eita pessoa boa!', name: nome });

// const assert = require('assert');
// assert.strictEqual(typeof(createStudent()), 'object');
// assert.strictEqual(typeof(createStudent('Ivan').feedback), 'function');
// assert.strictEqual(createStudent('Leandrão, o Lobo Solitário').name,
// 'Leandrão, o Lobo Solitário');
// assert.strictEqual(createStudent('Ivan').feedback(), 'Eita pessoa boa!');

console.log(createStudent('ivan').feedback());

module.exports = createStudent;
