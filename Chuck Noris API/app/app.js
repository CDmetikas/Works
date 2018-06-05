var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(function($routeProvider){
  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html',
    controller: 'randomController'
  })
  .when('/category', {
    templateUrl: 'views/category.html',
    controller: 'categoryController'
  })
  .when('/search', {
    templateUrl: 'views/search.html',
    controller: 'searchController'
  })
  .otherwise({
    redirectTo: '/home'
  });
});




myApp.controller('randomController', function($scope, $http) {
  $scope.refreshDiv = function(){
    $http.get('https://api.chucknorris.io/jokes/random')
    .then(function(response){
      $scope.randomJoke = response.data;
    });
  }
})

myApp.controller('categoryController', function($scope, $http) {

  $http.get('https://api.chucknorris.io/jokes/categories')
  .then(function(response){
    $scope.categoryList = response.data;
  });
  
  $scope.categoryClickForm = function(category){
    $http.get('https://api.chucknorris.io/jokes/random?category='+category)
    .then(function(response){
      $scope.categoryClick = response.data;
    });
  }
})

myApp.controller('searchController', function($scope, $http) {

  $scope.search = function(value){
    $http.get('https://api.chucknorris.io/jokes/search?query='+value)
  .then(function(response){
    $scope.searchList = response.data;
  });
  }

  
})