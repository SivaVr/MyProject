'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
      // Try to login
//      $http.post('api/login', {username: $scope.user.username, password: $scope.user.password})
//      .then(function(response) {
//          console.log("UserName"+response.data.user);
//  console.log("Password"+response.data.password)
//        if ( !response.data.user && !response.data.password ) {
//          $scope.authError = 'User Name or Password';
//        }else{
//          $state.go('app.dashboard-v1');
//        }
//      }, function(x) {
//        $scope.authError = 'Server Error';
//      });

    if($scope.user.username != "admin" && $scope.user.password != "admin"){
         $scope.authError = 'Invalid User Name or Password';
    }
    else{
        console.log("app.dashboard-v1");
    }
    };
  }])
;