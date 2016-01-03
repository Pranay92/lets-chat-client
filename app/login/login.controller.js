angular.module('login')
	   .controller('login',['$scope','$location','authService','storageService','messages',login]);

function login($scope,$location,authService,storageService,messages) {

	$scope.login = function() {

		authService.login($scope.username,$scope.password).then(function(response) {
      storageService.store('token',response.data.token);
      storageService.store('id',response.data.id);
      $location.path('/home');
    },function(error) {
      handleError(error);
    });

	};

  function handleError(error) {
    var errMsg = messages[error.status.toString()] || messages['default'];
    $scope.error = true;
    $scope.errMsg = errMsg.message;
  }
}