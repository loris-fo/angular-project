githubUserSearch.controller('GitUserSearchController', function($scope, $resource, $http) {

  var searchResource = $resource('https://api.github.com/search/users')

  var repoResource = $resource('https://api.github.com/users/:user')

  $scope.doSearch = function (){

    $scope.searchResult = searchResource.get({
      access_token: '587e4f0b8cbb52418e9230c1f3159e1a920138e6',
      q: $scope.searchTerm
    });

    $scope.repoResult = repoResource.get({
      access_token: '587e4f0b8cbb52418e9230c1f3159e1a920138e6',
      user: $scope.searchTerm
    })
  };

  $scope.doClear = function() {
    $scope.searchTerm = ""
  };

});


