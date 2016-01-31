(function(angular, undefined) {
'use strict';

angular.module('angularMaterialFullstackApp.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin'],LOCALES:{locales:{es_MX:'Español',en_US:'English'},preferredLocale:'en_US'}})

;
})(angular);