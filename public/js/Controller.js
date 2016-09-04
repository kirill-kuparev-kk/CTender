angular.module('appCTender').controller('AppCtrl', function($scope, ngDialog) {
    $scope.stepIndex=2;
    $scope.message = 'Hello World!';
    $scope.slider = {
        value: 6,
        options: {
            showTicksValues: true,
            stepsArray: [
                {value: 6},
                {value: 8},
                {value: 10},
                {value: 12},
                {value: 14},
                {value: 16},
                {value: 18},
                {value: 20},
                {value: 22},
                {value: 24}
            ]
        }
    };

    $scope.stepsNext=function(){
        if( $scope.stepIndex==10){
            return $scope.stepIndex=1}
        $scope.stepIndex= $scope.stepIndex+1
    }
    ;$scope.stepsPrev=function(){
        if( $scope.stepIndex==1){
            return $scope.stepIndex=10}
        $scope.stepIndex= $scope.stepIndex-1
    };


  console.log("slid",$scope.slider.value);
    $scope.clickToOpen = function () {
        ngDialog.open({ template: '../view/modal.html', className: 'ngdialog-modal' });
    };

    $scope.clickToOpenDip = function (dip) {
        ngDialog.open({ template: '../view/'+dip+'.html', className: 'ngdialog-modalDip' });
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
