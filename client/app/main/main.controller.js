'use strict';

angular.module('angularMaterialFullstackApp')
  .controller('MainController', function($scope, $state, $mdSidenav){

    $scope.menu = [
      {
        title: 'user',
        state: 'main.user',
        icon: 'svg-1'
      },
      {
        title: 'card',
        state: 'main.card',
        icon: 'svg-2'
      }
    ];
    $scope.state = $state;

    /**
     * Hide or Show the 'left' sideNav area
     */
    $scope.toggleList = function() {
      $mdSidenav('left').toggle();
    };

    $scope.changeState = function(state){
      $state.transitionTo(state);
    };
});
