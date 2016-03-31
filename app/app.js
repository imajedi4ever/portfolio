'use strict';

// Declare app level module which depends on views, and components
var app = angular.module( 'portfolio', [
  'ngRoute',
  'portfolio.version'
] );

/* TODO: probably need to move this to a app-route.js file */
app.config( [ '$routeProvider',
  function ( $routeProvider ) {
    $routeProvider.
      when( '/learn', {
        templateUrl: 'components/learn/learn.html',
        controller: 'LearnController'
      } ).
      when( '/paintings', {
        templateUrl: 'components/paintings/paintings.html',
        controller: 'PaintingsController'
      } ).
      when( '/sketches', {
        templateUrl: 'components/sketches/sketches.html',
        controller: 'SketchesController'
      } ).
      when( '/graphic-art', {
        templateUrl: 'components/graphic-art/graphic-art.html',
        controller: 'GraphicArtController'
      } ).
      when( '/typography', {
        templateUrl: 'components/typography/typography.html',
        controller: 'TypographyController'
      } ).
      when( '/about', {
        templateUrl: 'components/about/about.html',
        controller: 'AboutController'
      } ).
      when( '/contact', {
        templateUrl: 'components/contact/contact.html',
        controller: 'ContactController'
      } ).
      otherwise( {
        redirectTo: '/index.html',
        templateUrl: 'components/home/home.html',
        controller: 'HomeController'
    } );
  }
] );

/* TODO: probably need to move controllers into their component files */
app.controller( "HomeController", function( $scope ) {
  $scope.lifeHeader = "Life of ";
  $scope.artistryHeader = "Artistry";
  $scope.sculptedHeader = "Sculpted by ";
  $scope.experienceHeader = "Experience";
  $scope.readyHeader = "Ready for ";
  $scope.expressionHeader = "EXPRESSION";
} );

app.controller( "LearnController", function( $scope ) {
  $scope.learnHeader = "Learn More Article";
} );

app.controller( "PaintingsController", function( $scope ) {
  $scope.paintingsHeader = "Paintings Article";
} );

app.controller( "SketchesController", function( $scope ) {
  $scope.sketchesHeader = "Sketches Article";
} );

app.controller( "AboutController", function( $scope ) {
  $scope.aboutHeader = "About Article";
} );

app.controller( "ContactController", function( $scope ) {
  $scope.contactHeader = "Contact Article";
} );

app.controller( "GraphicArtController", function( $scope ) {
  $scope.graphicArtHeader = "Graphic Art Article";
} );

app.controller( "TypographyController", function( $scope ) {
  $scope.typographyHeader = "Typography Article";
} );
