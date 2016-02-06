'use strict';

describe('Controller: CardController', function () {

  // load the controller's module
  beforeEach(module('angularMaterialFullstackApp'));

  var CardCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CardCtrl = $controller('ProjectsController', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
