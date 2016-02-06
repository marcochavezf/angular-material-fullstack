'use strict';

/**
 * About Me Controller for the Angular Material Starter App
 * @param $scope
 * @param $mdSidenav
 * @param avatarsService
 * @constructor
 */
angular
  .module('angularMaterialFullstackApp')
  .controller('AboutMeController', function($scope, $rootScope) {

    $scope.user = {
      icon: 'svg-1',
      name: 'Marco Chávez',
      content: 'aboutme.content'
    };

    $scope.makeContact = function () {
      $scope.$emit('makeContact');
    };

    $scope.$on('$destroy',function(){
      $scope.$emit('hideContact');
    });

  });
