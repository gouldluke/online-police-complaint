import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';

import template from './complaintForm.html';

class ComplaintFormCtrl {
  constructor($scope) {
    $scope.viewModel(this);
  }

  sendComplaint(complaint) {
    //send email
    console.log('complaint object: ', complaint)
    // Meteor.call(
    //   'sendEmail',
    //   'lukelgould@gmail.com',
    //   'lukelgould@gmail.com',
    //   'It\'s a test email!',
    //   this.complaintTitle
    // )
    //
    this.newComplaint.complaintTitle = '';
    this.newComplaint.complaintDescription = '';
  }
}

export default angular.module('complaintForm', [
  angularMeteor
])
  .component('complaintForm', {
    templateUrl: 'imports/components/complaintForm/complaintForm.html',
    controller: ['$scope', ComplaintFormCtrl]
  });
