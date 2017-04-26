/**
 * Created by Administrator on 2017/4/26.
 */
angular.module('movieCat.directive.search',['ngRoute'])
	.directive('search',['$route', function ($route) {
			return {
				restrict:'A', //A = attr , E = ele ,C = class ,M = 注释
				templateUrl:"components/search.html",
				replace:true, //（布尔型）默认为false(模板内容会加载到标签内部)，true(模板内容会替换当前标签)
				link:function ($scope,$element,$attrs) {
					$scope.searchName = ''
					$scope.search = function(searchName) {
						$route.updateParams({category:'search',q:$scope.searchName})
					}
				}

			}
		}])
