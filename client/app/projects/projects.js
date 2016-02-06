'use strict';

angular.module('angularMaterialFullstackApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.projects', {
        url: '/projects',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsController'
      });
  });
