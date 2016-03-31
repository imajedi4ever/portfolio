'use strict';

// Declare app level module which depends on views, and components
var app = angular.module( 'portfolio', [
  'ngRoute',
  'portfolio.version'
] );

app.config( [ '$routeProvider',
  function ( $routeProvider ) {
    $routeProvider.
      when( '/paintings', {
        templateUrl: 'partials/paintings.html',
        controller: 'HomeController'
      } ).
      when( '/sketches', {
        templateUrl: 'partials/sketches.html',
        controller: 'HomeController'
      } ).
      otherwise( {
        redirectTo: '/index.html',
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
    } );
  }
] );

app.controller( "HomeController", function( $scope ) {
  $scope.lifeHeader = "Life of ";
  $scope.artistryHeader = "Artistry";
  $scope.sculptedHeader = "Sculpted by ";
  $scope.experienceHeader = "Experience";
  $scope.readyHeader = "Ready for ";
  $scope.expressionHeader = "EXPRESSION";
} );
