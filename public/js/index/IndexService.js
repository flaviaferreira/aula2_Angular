angular.module('app').service('IndexService', [function () {

  nomes = [];

  function salvar(nome){
    nomes.push(nome);
  }

  function excluir(index){
    nomes.splice(index, 1);
  }

  function getAll(){
    return nomes;
  }

  return { //return passando o objeto para ele se tornar publico
    salvar: salvar,
    getAll: getAll,
    excluir: excluir
  };


}]);