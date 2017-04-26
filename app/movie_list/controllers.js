/**
 * Created by Administrator on 2017/4/19.
 */
'use strict';
angular.module('movieCat.movie_list', ['ngRoute', 'movieCat.services.http'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:category/:page', {
            templateUrl: 'movie_list/view.html',
            controller: 'MovieListController'
        });
    }])
    .controller('MovieListController', ['$scope', '$routeParams', 'HttpSevice', '$route', function ($scope, $routeParams, HttpSevice ,$route) {
    	$scope.loading = true;
		var page = parseInt($routeParams.page);
		var start = (page - 1) * 10;
		var count = 10;
		HttpSevice.jsonp('http://api.douban.com/v2/movie/'+$routeParams.category,{start:start,count:count,q:$routeParams.q},function (data) {
			$scope.subject = data.subjects;
			$scope.totalCount = data.total;
			$scope.title = data.title
			var allPage = data.total%10  == 0 ? data.total/10 : data.total/10+1;
			var everyPage = [];
			for (var i = 1; i <= allPage; i++) {
				everyPage.push(i);
			}
			$scope.allPage = allPage;
			$scope.everyPage = everyPage;
			$scope.loading = false;
			$scope.$apply();
		})
		$scope.jumpTo = function (whatPage) {
			$route.updateParams({page:whatPage});
		}
		$scope.sub = function () {
			if(page > 1) {
				page -= 1;
				$route.updateParams({page:page});
			}
		}
		$scope.sum = function () {
			if(page < $scope.allPage-1) {
				page += 1;
				$route.updateParams({page:page});
			}
		}
    }]);
