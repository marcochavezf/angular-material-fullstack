'use strict';

angular.module('angularMaterialFullstackApp')
  .controller('ProjectsController', function ($scope) {
    $scope.imagePath = 'assets/images/washedout.png';
    $scope.imageAvatarPath = 'assets/images/yeoman.png';

    $scope.$on('$destroy',function(){
      $scope.$emit('hideContact');
    });
  })

  .directive('fadeIn', function(){
    return {
      restrict: 'A',
      link: function($scope, $element){
        $element.addClass("ng-hide-remove");
        $element.on('load', function() {
          $element.addClass("ng-hide-add");
        });
      }
    }
  });
