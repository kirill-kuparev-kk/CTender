angular.module('appCTender').controller('AppCtrl', function($scope, ngDialog,$timeout,$http) {




    $scope.client={
      name:"",
      phone:""
    };

    $scope.sendEmailClient=function(){
        console.log("work");
        $scope.closeThisDialog();

    $http({
        url: "http://localhost:3000/#/create",
        method: "GET",
        params: {name: $scope.client.name,phone:$scope.client.phone}
    });};





    $scope.logoPage2=false;
    $scope.logoPage1=true;
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

    $scope.changePage=function(){

      if($scope.logoPage1==true){
          $('#pageOne').animate({ overflow: 'none'},10000);
          $scope.logoPage2=true;
          $scope.logoPage1=false;


      }
      else {
          $('#pageTwo').animate({ overflow: 'none'},10000);
          $scope.logoPage1=true;
          $scope.logoPage2=false;

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


    ];

    $scope.Claents=[
        {img:"../images/Andrew.png",
        name:"Алексей Милованов",
        work:'придпринематель, ООО "Алюнест" ',
        tel:'тел. 8(918) 450 47 96',
        title:"Решили искать новые рынки получения заказов ",
        text:"Заключили договор с «Си тендер» начали работу. Теперь выигрываем торги и получаем новые заказы. Всю работу за тебя делает компания, нам нужно только дать цену, это экономит на сотрудниках и экономит свое время. Оплата только за выигранные тендеры, т. е. выиграл – заплатил, не выиграл – не заплатил )) а по факту получается, что за подготовку тендера платит сам заказчик, так как мы закладываем услуги «Си тендер» в цену контракта))"
        },

        {img:"../images/Andrew.png",
        name:"Павел Герасимов",
        work:"придпринематель, ООО «ЖилРемСтрой» ",
        tel:'тел. 8-918-435-13-18',
        title:"В «Ctender» предложили платить проценты за выигрыш",
        text:"Сотрудничаем с этой компанией уже более года, ребята отрабатывают себя на все 100% .Документы готовят быстро и качественно, а это самое главное, так как иногда попадаются такие Заказчики, которые готовы придраться к любой запятой, лишь бы отстранить от тендера не угодных им участников, но и такие ситуации решаются специалистами из «Ctender», но уже в ФАСе."
        },

        {img:"../images/Andrew.png",
        name:"Юлия Наумкина",
        work:"придпринематель, ИП Наумкина Ю.В.",
        tel:' тел. 8-978-709-77-93',
        title:'С компанией "С Тender" мы сотрудничаем в течение года, являясь активными участниками торгов, и совместно одержали уже немало побед',
        text:" В связи со вступлением Республики Крым и города Севастополя в состав Российской Федерации, субъекты предпринимательства столкнулись с необходимостью сориентироваться в новой для нас законодательной базе.Спасибо вам за то, что своим общением вы вызываете только положительные эмоции, за индивидуальный подход к клиенту, за доброжелательность и желание в любой момент прийти на помощь!"},

        {img:"../images/Andrew.png",
        name:"Александр Шерешевский",
        work:"придпринематель, ООО «НПСТЦ» ",
        tel:'тел. 8-495-999-48-25',
        title:"Сначала были сомнения по поводу обращения в компанию по сопровождению тендеров, тем более, когда эта компания находится в другом городе",
        text:"Ребята из «Ctender» предложили так сказать «тест-драйв» своих услуг, чтобы можно было понять как они работают и оценить качество удалённого обслуживания. С момента подготовки первого тендера прошло уже довольно много времени. До сих пор работаем вместе… Даже если сроки поджимают берутся за работу и доводят её до конца. Да и условия по оплате довольно интересные  – платим проценты по выигранным контрактам."
        }


    ];





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
    $scope.clickToOpenDipLend = function (dip) {
        ngDialog.open({ template: '../view/'+dip+'.html', className: 'ngdialog-modalDipLend' });
    };


});
