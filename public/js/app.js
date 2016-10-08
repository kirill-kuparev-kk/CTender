'use strict';

var appCTender=angular.module('appCTender', [

    'ui.router',
    'rzModule',
    'ngDialog',
    'ui.bootstrap',
    'angular-carousel',
    'ngResource'



]).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('app', {
        url: '/',
        templateUrl: 'view/landing.html',
        controller: 'AppCtrl'
    });

}).run(function () {

});