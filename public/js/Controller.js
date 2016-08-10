angular.module('appCTender').controller('AppCtrl', function($scope) {
    $scope.message = 'Hello World!';
    $scope.slider = {
        minValue: 60,
        maxValue: 60,
        options: {
            floor: 0,
            ceil: 100,
            step: 1,
            minRange: 10,
            pushRange: true
        }
    };
});
