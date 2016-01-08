'use strict';

/**
 * @ngdoc service
 * @name camperNewsApp.camperNews
 * @description
 * # camperNews
 * Service in the camperNewsApp.
 */
angular.module('camperNewsApp')
  .service('camperNews', function (API, $http) {
    this.getNews = function (cb) {
      $http.get(API.url).then(cb);
    };
  });
