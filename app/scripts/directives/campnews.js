'use strict';

/**
 * @ngdoc directive
 * @name camperNewsApp.directive:campNews
 * @description
 * # campNews
 */
angular.module('camperNewsApp')
  .directive('campNews', function () {
    return {
      templateUrl: 'views/post.html',
      restrict: 'E'
    };
  });
