angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
      .when('/', { templateUrl: '/partials/main', controller: 'mainCtrl' });
});

angular.module('app').controller('mainCtrl', function ($scope, $resource) {
    var email = $resource('/email');
    $scope.myVar = "City of Euclid";

    $scope.submitReport = function () {
        $scope.dataToSubmit = $scope.formData;
        email.save(function(res){
            console.log(res);
        });
    };
})
