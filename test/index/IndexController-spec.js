describe('IndexController', function () {
  var $scope;
  
  beforeEach(module('app'));
  beforeEach(inject(function($rootScope, $controller){
    $scope = $rootScope.$new();
    $controller('IndexController', {
      $scope: $scope
    });
  }));

  it('adicionar na lista', function(){
    $scope.salvar('teste1');
    expect($scope.nomes.length).toEqual(1);

    $scope.salvar('teste2');
    expect($scope.nomes.length).toEqual(2);

  });

  it('excluir da lista', function(){
    $scope.salvar('teste1');
    $scope.salvar('teste2');
    $scope.salvar('teste3');
    expect($scope.nomes.length).toEqual(3);
    
    $scope.excluir(nomes[1]);
    expect($scope.nomes.length).toEqual(2);
  });  

});