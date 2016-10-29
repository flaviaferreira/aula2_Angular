angular.module('app').directive('indexDirective', [function(){
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'js/index/IndexTemplateDirective.html',
    scope:{
      lista: '=',
      excluir: '&'
    }
  }
}]);