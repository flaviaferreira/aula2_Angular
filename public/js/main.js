angular.module('app',['ngRoute']).config(['$routeProvider', function($routeProvider) {
  
  $routeProvider.when('/', {
    templateUrl: 'js/index/TemplateIndex.html',
    controller: 'IndexController'
  });


}]);