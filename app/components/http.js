/**
 * Created by Administrator on 2017/4/19.
 */
var http = angular.module('movieCat.services.http',[]);
http.service('HttpSevice',['$document','$window',function ($document,$window) {
	this.jsonp = function (url,config,callback) {
		var cbFuncName = 'my_json_cb_'+Math.random().toString().replace('.','');
		var queryString = '?'
		$window[cbFuncName]=callback;
		if(config) {
			for (var index in config) {
				queryString += index + "=" + config[index] + '&';
			}
		}
		var script = $document[0].createElement('script');
		script.src = url + queryString + 'callback=' + cbFuncName;
		$document[0].body.appendChild(script);
	}
}])
