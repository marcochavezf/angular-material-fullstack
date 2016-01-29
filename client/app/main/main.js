'use strict';

angular.module('angularMaterialFullstackApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })
      .state('main.user', {
        url: '/user',
        templateUrl: 'app/user/user.html',
        controller: 'UserController'
      })
      .state('main.card', {
        url: '/card',
        templateUrl: 'app/card/card.html',
        controller: 'CardController'
      });
  });
