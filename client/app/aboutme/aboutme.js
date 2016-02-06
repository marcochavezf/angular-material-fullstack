'use strict';

angular.module('angularMaterialFullstackApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.aboutme', {
        url: '/aboutme',
        templateUrl: 'app/aboutme/aboutme.html',
        controller: 'AboutMeController'
      })
  });
