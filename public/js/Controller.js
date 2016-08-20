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

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: '//unsplash.it/' + newWidth + '/300',
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
            id: currIndex++
        });
    };

    $scope.randomize = function() {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
    };

    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }

    // Randomize logic below

    function assignNewIndexesToSlides(indexes) {
        for (var i = 0, l = slides.length; i < l; i++) {
            slides[i].id = indexes.pop();
        }
    }

    function generateIndexesArray() {
        var indexes = [];
        for (var i = 0; i < currIndex; ++i) {
            indexes[i] = i;
        }
        return shuffle(indexes);
    }

    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
        var tmp, current, top = array.length;

        if (top) {
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }

        return array;
    }
});
