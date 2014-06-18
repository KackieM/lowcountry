'use strict';

angular.module('lowcountryApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'views/beaches.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'views/historicalsites.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'views/lowcountryislands.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'views/wherelocalshang.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'views/edisto.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
