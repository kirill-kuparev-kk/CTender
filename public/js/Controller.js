angular.module('appCTender').controller('AppCtrl', function($scope, ngDialog,$timeout) {
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

    $scope.Prevs=[
        {Title:"01",
        Subtitle:"Аккредитация на всех необходимых электронных торговых площадках",
        Text:""
        }
        ,{Title:"02",
        Subtitle:"Ежедневная рассылка «свежих» тендеров по Вашей тематике",
        Text:"Выборка тендеров производится вручную, поэтому Вы будете получать только те тендеры, которые полностью соответствуют Вашим критериям."
        }
        ,{Title:"03",
        Subtitle:"Подача запросов на разъяснение положений документации",
        Text:"Если по тендеру возникают вопросы, отправляем Заказчику запрос на разъяснение. В течение 2-х дней Заказчик обязан дать ответ."
        }
        ,{Title:"04",
        Subtitle:"Анализ тендерной докуметации",
        Text:"Обращаем Ваше внимание на ключевые моменты тендерной документации. Проверяем тендер на наличие коррупционной составляющей."
        }
        ,{Title:"05",
        Subtitle:"Проверка репутации Заказчика",
        Text:"Анализируем историю проведения закупок Заказчиком: причины отклонения заявок, процент снижения на аукционах, с какими компаниями были заключены контракты и т. д."
        }
        ,{Title:"06",
        Subtitle:"Подготовка заявки на участие в торгах",
        Text:"Готовим заявку в полном объёме, включая техническую часть"
        }
        ,{Title:"07",
        Subtitle:"Участие в торгах",
        Text:"Отыгрываем аукцион в соответствии с рассчитанным заранее минимальным ценовым порогом."
        }
        ,{Title:"08",
        Subtitle:"Подача жалобы в ФАС",
        Text:"В случае неправомерных действий со стороны Заказчика, подаём жалобу в Федеральную Антимонопольную Службу (ФАС)."
        }
        ,{Title:"09",
        Subtitle:"Оформление банковских гарантий и тендерных кредитов",
        Text:"Помогаем получить банковские гарантии и тендерные кредиты для обеспечения заявок и обеспечения исполнения контрактов на самых выгодных условиях."
        }
        ,{Title:"10",
        Subtitle:"Подписание контракта с Заказчиком",
        Text:"Подписываем контракт с Заказчиком в электронном виде на электронной торговой площадке, после чего можно приступать к выполнению работ!"
        }


    ]


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
        console.log("!!!")
        ngDialog.open({ template: '../view/modal.html', className: 'ngdialog-modal' });
    };

    $scope.clickToOpenDone = function () {
        ngDialog.close({ template: '../view/modal.html', className: 'ngdialog-modal' });
        console.log("1111");
        ngDialog.open({ template: '../view/done.html', className: 'ngdialog-modalDone' });
    };

    $scope.clickToOpenDip = function (dip) {
        ngDialog.open({ template: '../view/'+dip+'.html', className: 'ngdialog-modalDip' });
    };


});
