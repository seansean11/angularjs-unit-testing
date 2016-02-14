describe('Movie Result Directive', function() {
	var result = {
		Poster: 'http://localhost/image.jpg',
		Title: 'Star Wars: Episode IV - A New Hope',
		Director: 'George Lucas',
		Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
		Released: '25 May 1977',
		Plot: 'After the rebels have been brutally overpowered by the Empire on their newly established vase, Luke Skywalker takes advanced Jedi training with Master Yoda, while his friends are pursued by Darth Vader as part of his plan to capture Luke.',
		Genre: 'Action, Adventure, Fantasy'
	};

	var expectedHtml = '<div class="col-sm-4"><img ng-src="http://localhost/image.jpg" alt="Star Wars: Episode IV - A New Hope" width="220" src="http://localhost/image.jpg"></div><div class="col-sm-8"><h3 class="ng-binding">Star Wars: Episode IV - A New Hope</h3><p class="ng-binding"><strong>Plot:</strong> After the rebels have been brutally overpowered by the Empire on their newly established vase, Luke Skywalker takes advanced Jedi training with Master Yoda, while his friends are pursued by Darth Vader as part of his plan to capture Luke.</p><p class="ng-binding"><strong>Director:</strong> George Lucas</p><p class="ng-binding"><strong>Actors:</strong> Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing</p><p class="ng-binding"><strong>Released:</strong> 25 May 1977</p><p class="ng-binding"><strong>Genre:</strong> Action, Adventure, Fantasy</p></div>';

	var $compile;
	var $rootScope;

	beforeEach(module('movieApp'));
	beforeEach(inject(function(_$compile_, _$rootScope_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));

	it('should output movie result to expected HTML format', function() {
		var element;
		$rootScope.result = result;
		element = $compile('<movie-result result="result"></movie-result>')($rootScope);
		$rootScope.$digest();
		expect(element.html()).toBe(expectedHtml);
	})
});
