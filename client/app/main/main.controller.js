'use strict';

angular.module('angularMaterialFullstackApp')
  .controller('MainController', function($scope, $rootScope, $state, $window, $mdSidenav, $mdBottomSheet){

    var isShowingContactSheet = false;
      $scope.menu = [
      {
        title: 'About me',
        state: 'main.aboutme',
        icon: 'aboutme'
      },
      {
        title: 'Projects',
        state: 'main.projects',
        icon: 'projects'
      },
      {
        title: 'Skills',
        state: 'main.skills',
        icon: 'skills'
      }
    ];

    /**
     * Hide or Show the 'left' sideNav area
     */
    $scope.toggleList = function() {
      $mdSidenav('left').toggle();
    };

    $scope.changeState = function(menuItem){
      $state.transitionTo(menuItem.state);
      $scope.currentMenuItem = menuItem;
    };

    var canPressAgain = true;
    $scope.makeContact = function(){
      if (!canPressAgain) {
        return;
      }

      canPressAgain = false;
      setTimeout(function(){
        canPressAgain = true;
      }, 250);

      var bottomSheetExists = angular.element(document.querySelector('#bottom-sheet'))[0];
      if (bottomSheetExists) {
        return $mdBottomSheet.hide();
      }

      $mdBottomSheet.show({
        templateUrl   : 'app/main/contact.sheet.html',
        controller    : 'ContactSheetController',
        parent        : angular.element(document.getElementById('content'))
      });
    };

    var w = angular.element($window);
    w.bind('resize', function () {
      isShowingContactSheet = false;
      $mdBottomSheet.hide();
    });

    var unbindMakeContact = $rootScope.$on('makeContact', function(){
      $scope.makeContact();
    });
    var unbindHideContact = $rootScope.$on('hideContact', function(){
      isShowingContactSheet = false;
      $mdBottomSheet.hide();
    });

    $scope.$on('$destroy', unbindMakeContact);
    $scope.$on('$destroy', unbindHideContact);
    $scope.$on('$destroy', function() {
      w.unbind('resize');
    });

    if($state.current.name === 'main'){
      $scope.currentMenuItem = $scope.menu[0];
      $scope.changeState($scope.currentMenuItem);
    }
  })

  /**
   *  ContactSheet controller
   */
  .controller('ContactSheetController', function($scope, $window, $translate, $mdDialog) {
    $scope.actions = [
        { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
        { name: 'Mail'        , icon: 'mail'        , icon_url: 'assets/svg/mail.svg'},
        { name: 'Skype'       , icon: 'skype'       , icon_url: 'assets/svg/skype.svg'}
      ];
    $scope.submitContact = function(item) {
      switch(item.name){
        case 'Phone':
          $mdDialog.show(
            $mdDialog.alert()
              .parent(angular.element(document.querySelector('#popupContainer')))
              .clickOutsideToClose(true)
              .title($translate.instant('Phone number'))
              .textContent('+52 55 17 04 99 84')
              .ariaLabel('Alert Dialog Demo')
              .ok('Ok')
              .targetEvent()
          );
          break;
        case 'Mail':
          //$window.location = 'mailto:marco@kangou.mx';
          $window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=marco@kangou.mx&su=Hi&body=Hey Marco what\'s up');
          break;
        case 'Skype':
          $window.open('skype:marcochavezf?chat');
          break;
      }
    };
  })

  .directive('scroller', function(){
    return {
      restrict: 'A',
      link: function(scope,elem){
        angular.element(elem).on('scroll', function(){
          scope.$emit('hideContact');
        });
      }
    }
  });


