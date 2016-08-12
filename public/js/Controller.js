angular.module('appCTender').controller('AppCtrl', function($scope, ngDialog) {
    $scope.message = 'Hello World!';
    $scope.slider = {
        value: 5,
        options: {
            showTicksValues: true,
            stepsArray: [
                {value: 6, legend: 'Very poor'},
                {value: 8, legend: 'Fair'},
                {value: 10, legend: 'Average'},
                {value: 12, legend: 'Good'},
                {value: 14, legend: 'Excellent'},
                {value: 16, legend: 'Average'},
                {value: 18, legend: 'Good'},
                {value: 20, legend: 'Excellent'},
                {value: 22, legend: 'Good'},
                {value: 24, legend: 'Excellent'}
            ]
        }
    };

    $scope.clickToOpen = function () {
        ngDialog.open({ template: '../view/modal.html', className: 'ngdialog-modal' });
    };
});
