githubUserSearch.controller('GitUserSearchController', function($scope, $resource, $http) {

  var searchResource = $resource('https://api.github.com/search/users')

  $scope.doSearch = function (){

    $scope.searchResult = searchResource.get({
      access_params: '587e4f0b8cbb52418e9230c1f3159e1a920138e6',
      q: $scope.searchTerm
    }, function(){
      var name = 'https://api.github.com/users/' + $scope.searchTerm;
      $http.get(name).
        success(function(data){
          $scope.username = data
        });
    });

  };

});




// $scope.doClear = function() {
  //   $scope.searchTerm = ""
  // };