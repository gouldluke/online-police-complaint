import angular from 'angular';
import angularMeteor from 'angular-meteor';
import complaintForm from '../imports/components/complaintForm/complaintForm';

angular.module('online-police-complaint', [
  angularMeteor,
  complaintForm.name
]);
