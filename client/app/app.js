'use strict';

angular.module('angularMaterialFullstackApp', [
  'angularMaterialFullstackApp.constants',
  'ngMaterial',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'pascalprecht.translate',// angular-translate
  'tmh.dynamicLocale'// angular-dynamic-locale
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/main/user');

    $locationProvider.html5Mode(true);
  })
  .config(function($mdThemingProvider, $mdIconProvider){

    $mdIconProvider
      .defaultIconSet('./assets/svg/avatars.svg', 128)
      .icon('menu'       , './assets/svg/menu.svg'        , 24)
      .icon('share'      , './assets/svg/share.svg'       , 24)
      .icon('favorite'   , './assets/svg/favorite.svg'    , 24)
      .icon('google_plus', './assets/svg/google_plus.svg' , 512)
      .icon('hangouts'   , './assets/svg/hangouts.svg'    , 512)
      .icon('twitter'    , './assets/svg/twitter.svg'     , 512)
      .icon('phone'      , './assets/svg/phone.svg'       , 512);

    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('light-green');

  })

  .config(function ($translateProvider) {
    $translateProvider.useMissingTranslationHandlerLog();
    $translateProvider.useStaticFilesLoader({
      prefix: 'components/resources/locale-',// path to translations files
      suffix: '.json'// suffix, currently- extension of the translations
    });
    $translateProvider.preferredLanguage('en_US');// is applied on first load
    $translateProvider.useLocalStorage();// saves selected language to localStorage
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
  })

  .config(function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
  });
