'use strict';

angular.module('angularMaterialFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.skills', {
        url: '/skills',
        templateUrl: 'app/skills/skills.html',
        controller: 'SkillsController'
      });
  });
