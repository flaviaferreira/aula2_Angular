angular.module('cruj').service('IndexService', [function () {
  
  function somaDeDoisValores(a, b) {
    return a + b;
  }

  return { //return passando o objeto para ele se tornar publico
    somaDeDoisValores: somaDeDoisValores
  };


}]);