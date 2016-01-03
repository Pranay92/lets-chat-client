angular.module('login')
	   .controller('login',['$scope','$location','authService','storageService','messages',login]);

function login($scope,$location,authService,storageService,messages) {

  $scope.credentials = {};

	$scope.login = function() {

		authService.login($scope.credentials.username,$scope.credentials.password).then(function(response) {
      storageService.store('token',response.data.token);
      storageService.store('id',response.data.id);
      $location.path('/home');
    },function(error) {
      handleError(error);
    });

	};

  $scope.reset = function() {
    $scope.error = false;
    $scope.errMsg = '';
  };

  function handleError(error) {
    var errMsg = messages[error.status.toString()] || messages['default'];
    $scope.error = true;
    $scope.errMsg = errMsg.message;
  }

}