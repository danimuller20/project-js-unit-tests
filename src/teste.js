const obj = {
  nome: [],
  addNome: (string) => {
    obj.nome.push(string);
  }
}

obj.addNome('Rafael');
console.log(obj);