angular.module('app').controller('IndexController',['$scope', 'IndexService', function($scope, IndexService){

  $scope.nomes = [];

  $scope.salvar = function() {
    IndexService.salvar($scope.nome);
    $scope.getAll();
  }

  $scope.excluir = function(i) {
    IndexService.excluir(i);
    $scope.getAll();
  }
  
  $scope.getAll = function(){
    $scope.nomes = IndexService.getAll();
  }

}]);