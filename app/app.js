'use strict';

angular.module('movieCat', [
  'ngRoute',
  'movieCat.movie_list',
  'movieCat.directive.auto_focus'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: 'in_theaters/1'});
}]);
