'use strict';

angular.module('referenceMeApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    //add location

    $scope.mainTags = [
      'javascript',
      'fun',
      'CSS Html',
      'other',
    ];
    
    var allData = hipchatLinks;
    $rootScope.selectedTag;

    var selector = ["javascript","fun"];

    $scope.clickOnTag = function(objEvent) {
    	// window.eventObj = objEvent;
    	console.log(objEvent.target.innerText);

    	$rootScope.selectedTag = objEvent.target.innerText;
    }


  });
