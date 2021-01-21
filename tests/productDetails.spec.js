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
const products = productDetails('Máscara', 'Álcool Gel');
const returnArray = () => {
  if ((typeof products === 'object') & (typeof products === 'object')) {
    return 'object'
  }
}
const equalObject = () => {
  const initialMaterial = Object.values(productDetails('Máscara', 'Máscara'));
  if(initialMaterial[0].name === initialMaterial[1].name) {
    return true
  } else {
    return false
  }
 }

 const filterFunction = (idDetails) => {
  cont = 0;
  for(let index in idDetails) {
    const objetoId = Object.values(idDetails[index].details.productId);
    let reversed = objetoId.reverse()
    if ((reversed[0] === '3') & (reversed[1] === '2') & (reversed[2] === '1')){
      cont += 1
    }
  }
  if(cont >= 2) {
    return true
  }
  else {return false}
}

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.deepStrictEqual(typeof productDetails('Máscara', 'Álcool Gel'), 'object') // Teste que o retorno da função é um array.
    assert.strictEqual(productDetails('Máscara', 'Álcool Gel').length === 2, true) // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(returnArray(), 'object') // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(equalObject(), true) // Teste que os dois objetos são diferentes entre si.
    assert.deepStrictEqual(filterFunction(products), true) // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
