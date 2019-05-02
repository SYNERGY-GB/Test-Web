
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

app.controller('loginEntrada', function($scope,$location,$http) {
		$scope.welcome="Welcome User at timeline!!!";




		$scope.entrar = function() {			
			var user = $scope.user;
			var password = $scope.password;			
			var type= $scope.type;
			

			if($scope.user == 'synergy' && $scope.password == 'synergy123' && $scope.type == 'V' ){
					$http.post("https://prueba-admision-web.herokuapp.com/session",{
					username:$scope.user,	
					password:$scope.password,
					type:$scope.type})
   .then(
       function(response){
         // success callback
         		var data = response.data;
         		var cookie = response.data.cid;        		
    			
    			if(data.status == "ok"){
    				

    			$http.get("https://prueba-admision-web.herokuapp.com/data?cid=k6lj87hj8",{
				id: 1,
    			title: $scope.titulo,
    			url: $scope.urls,
    			thumbnailUrl:$scope.min })

    				.then(function(response){
    					$scope.synergy=response;
    					var data = response.data;
    					
    					console.log(data);

    				});

    				   				
    				//console.log(cookie);

    			}       
       
    });
			window.location.hash= '#!/timeline';
			$location.path('/timeline');

			}else{
					
			//alert("Error status: failed,cid: null, HTTP 401");
				}
		};

		$scope.alert = function(){

		
		alert('"recuperar contraseña"');

}

$scope.validar = function(){

	if($scope.loginaccess.$valid){
		$scope.loginok =true;
	}



}

			
	});
