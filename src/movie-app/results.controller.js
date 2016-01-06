angular.module('movieApp')
  .controller('ResultsController', function($scope, $location, omdbApi) {

    // $scope.results.push({data: {Title:"Star Wars: Episode IV - A New Hope", Year:"1977", imdbID:"tt0076759", Type:"movie"}});
    // $scope.results.push({data: {Title:"Star Wars: Episode V - The Empire Strikes Back", Year:"1980", imdbID:"tt0080684", Type:"movie"}});
    // $scope.results.push({data: {Title:"Star Wars: Episode VI - Return of The Jedi", Year:"1983", imdbID:"tt0086190", Type:"movie"}});

    omdbApi.search('star wars')
      .then(function(data) {
        console.log(data);
        // $scope.results = data.Search;
      });
  });