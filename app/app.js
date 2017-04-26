'use strict';

angular.module('movieCat', [
  'ngRoute',
  'movieCat.movie_list',
  'movieCat.directive.auto_focus',
  'movieCat.directive.search'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: 'in_theaters/1'});
}]);
