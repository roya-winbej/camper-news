'use strict';

/**
 * @ngdoc function
 * @name camperNewsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the camperNewsApp
 */
angular.module('camperNewsApp')
  .controller('MainCtrl', function ($scope, camperNews) {
    camperNews.getNews(function (res) {

      var posts = res.data;
      var postsOnpage = 5;


      function limitPosts(limit) {
        return posts.slice(0, limit);
      }

      posts.forEach(function (post) {
        if (!post.image || post.image === "undefined") {
          post.image = post.author.picture;
        }
      });

      $scope.loadMore = function () {
        postsOnpage += 5;
        $scope.posts = limitPosts(postsOnpage);
      };

      $scope.posts = limitPosts(postsOnpage);


    });
  });
