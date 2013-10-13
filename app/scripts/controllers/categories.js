'use strict';

angular.module('referenceMeApp')
  .controller('CategoriesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.allData = hipchatLinks;
    $scope.commentNbChar = 5;

    $scope.initialize = function() {
    	console.log("initialize");
    }

  });
