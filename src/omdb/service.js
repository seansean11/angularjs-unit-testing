angular.module('omdb', [])
  .factory('omdbApi', function($http, $q) {
    var service = {};
    var baseUrl = 'http://www.omdbapi.com/?v=1&';

    service.search = function(query) {
      return $http.get(baseUrl + 's=' + encodeURIComponent(query));
    };
    service.find = function(id) {
      return $http.get(baseUrl + 's=' + id);
    };

    return service;
  });
