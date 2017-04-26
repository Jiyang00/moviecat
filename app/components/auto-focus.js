/**
 * Created by Administrator on 2017/4/20.
 */
angular.module('movieCat.directive.auto_focus',[])
	.directive('autoFocus',['$location', function ($location) {
		var path = $location.path();
			return {
				restrict:'A', //A = attr , E = ele ,C = class ,M = 注释
				link:function ($scope,iElm,iAttrs) {
					$scope.$location = $location;
					$scope.$watch('$location.path()',function (now) {
						var aLink = iElm.children().attr('href');
						var type = aLink.replace(/#(\/.+?)\/\d+/,'$1');
						if(now.startsWith(type)) {
							iElm.parent().children().removeClass('active');
							iElm.addClass('active');
						}
					})

					/*iElm.on('click',function () {
						iElm.parent().children().removeClass('active');
						iElm.addClass('active');
					})*/
				}
			}
		}])
