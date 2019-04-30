
 var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider

	.when('/',{
		//template: 'Its Doing Now'
		templateUrl: 'login.html'
	})

	.when('/timeline',{
		// template: 'Welcome User Again!!!'
		templateUrl: 'timeline.html'
	})	
	.otherwise({
		redirectTo: '/'
	});
});

app.controller('loginEntrada', function($scope, $location) {
		$scope.entrar = function() {
			var user = $scope.user;
			var password = $scope.password;			
			var type= $scope.type;

				if($scope.user == 'admin' && $scope.password == 'admin' && $scope.type == 'V' ){					
					window.location.hash= '#!/timeline';
					$location.path('/timeline');

			}else{
					alert('Usuario no existe');
				}
		};

		$scope.alert = function(){

		
		alert('"recuperar contraseña"');

}




			
	});
