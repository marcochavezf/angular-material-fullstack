'use strict';

angular.module('angularMaterialFullstackApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })
  });
