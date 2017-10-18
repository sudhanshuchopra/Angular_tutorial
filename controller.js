var app=angular.module("test",['ngRoute'])
app.config(function($routeProvider){

	$routeProvider
	.when('/',{
		template:"igiubujbkjnjkn"
	})
	.when('/bro',{
		templateUrl:"dummy.html"
	})
	.otherwise({
		redirectTo:'/'
	});
});