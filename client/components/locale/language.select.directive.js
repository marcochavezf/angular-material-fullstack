'use strict';
angular.module('angularMaterialFullstackApp') .directive('ngTranslateLanguageSelect', function (LocaleService) {

  return {
    restrict: 'A',
    replace: true,
    template: ''+
    '<md-input-container ng-if="visible" class="language-select">'+
    '<md-select ng-model="currentLocaleDisplayName" placeholder="{{ \'Language\' | translate }}" ng-change="changeLanguage(currentLocaleDisplayName)">'+
    '<md-option ng-repeat="localesDisplayName in localesDisplayNames" value="{{localesDisplayName}}">'+
    '{{localesDisplayName}}'+
    '</md-option>'+
    '</md-select>'+
    '</md-input-container>'+
    '',
    controller: function ($scope) {
      $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
      $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
      $scope.visible = $scope.localesDisplayNames &&
      $scope.localesDisplayNames.length > 1;

      $scope.changeLanguage = function (locale) {
        LocaleService.setLocaleByDisplayName(locale);
      };
    }
  };
});
