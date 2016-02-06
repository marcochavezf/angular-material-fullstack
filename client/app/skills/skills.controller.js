'use strict';

angular.module('angularMaterialFullstackApp')
  .controller('SkillsController', function ($scope, $interval) {

    $scope.skills = [
      {
        title: 'Back-end',
        technologies: [
          { title: 'Node.js + Express',     level: 'Master',      value: 0 },
          { title: 'MongoDB/Mongoose',      level: 'Master',      value: 0 },
          { title: 'SQL (MySQL & Oracle)',  level: 'Master',      value: 0 },
          { title: 'Socket.io',             level: 'Expert',  value: 0 },
          { title: 'CakePHP',               level: 'Expert' , value: 0}
        ]
      },
      {
        title: 'Front-end',
        technologies: [
          { title: 'AngularJS',             level: 'Master',      value: 0 },
          { title: 'Bootrstrap',            level: 'Master',      value: 0 },
          { title: 'CSS3',                  level: 'Expert',  value: 0 },
          { title: 'jQuery',                level: 'Expert',  value: 0 },
        ]
      },
      {
        title: 'Mobile',
        technologies: [
          { title: 'Xamarin.iOS',           level: 'Expert',      value: 0 },
          { title: 'Xamarin.Android',       level: 'Expert',      value: 0 },
          { title: 'Corona SDK',            level: 'Expert',      value: 0 },
          { title: 'Ionic',                 level: 'Proficient',  value: 0 }
        ]
      }
    ];

    function incrementValue(technology){
      var limit = 0;
      switch(technology.level){
        case 'Master':
          limit = 100;
          break;
        case 'Expert':
          limit = 75;
          break;
        case 'Proficient':
          limit = 50;
          break;
        case 'Familiar':
          limit = 25;
          break;
      }
      if (technology.value < limit){
        return 5;
      }
      return 0;
    }

    $interval(function(){
      for(var index=0; index < $scope.skills.length; index++){
        var technologies = $scope.skills[index].technologies;
        for(var indexB=0; indexB < technologies.length; indexB++){
          var technology = technologies[indexB];
          technology.value += incrementValue(technology);
        }
      }
    }, 100, 20, true);

    $scope.otherSkills = [
        {
          title: 'Javascript',
          level: 'Master'
        },
        {
          title: 'C/C++',
          level: 'Master'
        },
        {
          title: 'Java',
          level: 'Proficient'
        },
        {
          title: 'PHP',
          level: 'Proficient'
        },
        {
          title: 'C#',
          level: 'Proficient'
        },
        {
          title: 'Ruby',
          level: 'Familiar'
        },
        {
          title: 'Clojure',
          level: 'Familiar'
        },
        {
          title: 'Cocos2D-X',
          level: 'Familiar'
        },
        {
          title: 'F#',
          level: 'Familiar'
        },
        {
          title: 'Lua',
          level: 'Proficient'
        },
        {
          title: 'SCRUM',
          level: 'Proficient'
        },
        {
          title: 'Apps Script',
          level: 'Proficient'
        },
        {
          title: 'Docker/Dokku',
          level: 'Proficient'
        },
        {
          title: 'Apache',
          level: 'Familiar'
        },
        {
          title: 'Nginx',
          level: 'Familiar'
        },
        {
          title: 'PMP',
          level: 'Proficient'
        },
        {
          title: 'NUnit',
          level: 'Proficient'
        },
        {
          title: 'Karma/Mocha',
          level: 'Proficient'
        },
        {
          title: 'Sass',
          level: 'Proficient'
        },
        {
          title: 'Elasticsearch',
          level: 'Proficient'
        },
        {
          title: 'Firebase',
          level: 'Proficient'
        }
      ];
  });
