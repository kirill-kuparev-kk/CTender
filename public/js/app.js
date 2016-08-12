'use strict';

angular.module('appCTender', [
    'ui.router',
    'rzModule',
    'ngDialog'
]).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('app', {
        url: '/',
        templateUrl: 'view/landing.html',
        controller: 'AppCtrl'
    });

}).run(function () {

});