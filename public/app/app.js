angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
      .when('/', { templateUrl: '/partials/main', controller: 'mainCtrl' });
});

angular.module('app').controller('mainCtrl', function ($scope) {
  $scope.showForm = true;
  $scope.showNextSteps = false;
  $scope.complaintForm = {};

  $scope.city = "City of Euclid";
  $scope.introductionText = [
      "If you have experienced violence, brutality or oppression at the hands " +
      "of members of the police department, please consider completing the form below to report this " +
      "violation.",
      "If you would like to remain anonymous, please do not include your name. We may not " +
      "be able to submit this report to the department, but your contribution will still enable us to " +
      "collect data on the department to present to city officials."
  ];
  $scope.differenceExplanation = "You can either submit your complaint directly with the police department or"
  $scope.completedText = "Thank you for submitting the report and helping keep police accountable in Ohio! Your report ID number is *** xxxxxxx ***. You will recieve an email and/or a text with this ID number. You can reach out to us at xxx@xxx.com or 440-xxx-xxxx if you would like any further information about the status of your report, but we will do our best to contact you if we find out any further information. Please visit euclidpolicecomplaint.com/xxx to view statistics on reports from you police department and get in touch with other victims of police violence."

  $scope.falsificationUrl = "http://codes.ohio.gov/orc/2921.13"

  $scope.submitViaWebsite = function () {
      $scope.showForm = true;
  }

  $scope.submitViaDepartment = function () {
      $scope.showForm = false;
  }

  $scope.submitForm = function () {
      $scope.showNextSteps = true;

      console.log($scope.complaint);
      console.log($scope.officer);
      console.log($scope.plaintiff);
  };

  $scope.editReport = function () {
      $scope.showForm = true;
  }
})
