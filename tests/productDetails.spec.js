/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Object.keys(productDetails()).length > 0, true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(Object.keys(productDetails()).length === 2, true);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails()[0] === 'object' && typeof productDetails()[1] === 'object', true)
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(productDetails()[0] === productDetails()[1], false)
    // (Difícil) Teste que os dois productIds terminam com 123.
    const prodName1 = productDetails()[0].details.productId;
    const prodName2 = productDetails()[1].details.productId;
    const last3Temp1 = [];
    const last3Temp2 = [];
    for (let i = prodName1.length - 3; i < prodName1.length; i += 1) {
      last3Temp1.push(prodName1[i]);
    }
    for (let i = prodName2.length - 3; i < prodName2.length; i += 1) {
      last3Temp2.push(prodName1[i]);
    }
    assert.strictEqual(last3Temp1.toString(), last3Temp2.toString());
  });
});
