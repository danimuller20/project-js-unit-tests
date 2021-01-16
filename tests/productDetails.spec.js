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
  const productdetails = productDetails('coca','mate');
  const checkIfthereIs123Item1 = productdetails[0].details.productId.indexOf('123') > -1;
  const checkIfthereIs123Item2 = productdetails[1].details.productId.indexOf('123') > -1;
describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productdetails), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productdetails.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof (productdetails[0]) && typeof(productdetails[1]), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(productdetails[0].name === productdetails[1].name, false);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(checkIfthereIs123Item1 && checkIfthereIs123Item2, true);

  });
});
