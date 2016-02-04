/**
 * Created by MR.T on 1/7/2016.
 */
var myApp = angular.module('myApp', []);

myApp.controller('mainController',['$scope','$filter',function($scope,$filter){

    $scope.handle = '';
    $scope.lowercasehandle = function() {

        return $filter('lowercase')($scope.handle);

    };


}]);