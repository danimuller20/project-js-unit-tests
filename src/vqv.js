/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

function isArrayNotUndefined(array) {
  return !array.some(element => element === undefined);
}

function isParametersValid(parameters) {
  return parameters.length > 0 && isArrayNotUndefined(parameters);
}

const vqv = (nome, idade) => {
  if (!isParametersValid([nome, idade])) {
    return undefined;
  }
  const frase = `Oi, meu nome é ${nome}!\nTenho ${idade} anos,\ntrabalho na Trybe e mando muito em programação!\n#VQV!`;
  return frase;
};

module.exports = vqv;
