var app=angular.module("test",['ngRoute'])
app.config(function($routeProvider){

	$routeProvider
	.when('/',{
		template:"hey man"
	})
	.when('/bro',{
		template:"having fun"
	})
	.otherwise({
		redirectTo:'/'
	});
});