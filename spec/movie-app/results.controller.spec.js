describe('Results Controller', function() {

  var results = {
    "Search":[
      {
        "Title":"Star Wars: Episode IV - A New Hope",
        "Year":"1977",
        "imdbID":"tt0076759",
        "Type":"movie"
      },
      {
        "Title":"Star Wars: Episode V - The Empire Strikes Back",
        "Year":"1980",
        "imdbID":"tt0080684",
        "Type":"movie"
      },
      {
        "Title":"Star Wars: Episode VI - Return of The Jedi",
        "Year":"1983",
        "imdbID":"tt0086190",
        "Type":"movie"
      }
    ]
  };

  var $controller;
  var $scope;
  var $q;
  var $rootScope;
  var omdbApi;

  beforeEach(module('movieApp'));
  beforeEach(module('omdb'));

  beforeEach(inject(function(_$controller_, _$q_, _$rootScope_, _omdbApi_) {
    $controller = _$controller_;
    $scope = {};
    $q = _$q_;
    $rootScope = _$rootScope_;
    omdbApi = _omdbApi_;
  }));

  it('should load search results', function() {
    spyOn(omdbApi, 'search').and.callFake(function() {
      var deferred = $q.defer();
      deferred.resolve(results);
      return deferred.promise;
    });
    $controller('ResultsController', { $scope: $scope });
    $rootScope.$apply();
    expect($scope.results[0].Title).toBe(results.Search[0].Title);
    expect($scope.results[1].Title).toBe(results.Search[1].Title);
    expect($scope.results[2].Title).toBe(results.Search[2].Title);
  });
});