(function() {
  'use strict';

  angular
    .module('notesAngular')
    .controller('TestController', TestController);

  /** @ngInject */
  function TestController($scope, $window) {

    $scope.imie = 'Ewelina';
    $scope.przywitaj = function(){
      $window.alert('witam Cie ' + $scope.imie);

    }

  }
})();
