"use strict";angular.module("referenceMeApp",[]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/categories",{templateUrl:"views/categories.html",controller:"CategoriesCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("referenceMeApp").controller("MainCtrl",["$scope","$rootScope",function(a,b){a.mainTags=["javascript","fun","CSS Html","other"],b.selectedTag,a.clickOnTag=function(a){console.log(a.target.innerText),b.selectedTag=a.target.innerText}}]),angular.module("referenceMeApp").controller("CategoriesCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.allData=hipchatLinks,a.initialize=function(){console.log("initialize")}}]);