appCTender.factory('Message', function($resource, $location){

    return  $resource(
        $location.absUrl() + '/',{},

        {
            sendMessages: {
                url:  $location.absUrl() + '/sendMessages',
                method:'POST',
                isArray: true,
                body: {client: '@client'}
            }


        }
    );

});


//'use strict';
//
//angular.module('app.resources', [])
//    .factory('Customer', customerResource);
//
//customerResource.$inject = ['$resource', '$location'];
////
//function customerResource ($resource, $location) {
//    var Customer = $resource(
//        $location.absUrl() + '/member/:id',
//        {
//            id      : "@id"
//        },
//        {
//            create: {
//                url: $location.absUrl() + 'customer/create',
//                method:'POST',
//                isArray: false,
//                headers: {'x-csrf-token' : $("#csrf").val() },
//                params: {
//                    cardNumber:"@cardNumber",
//                    cardName:"@cardName",
//                    accountName: "@accountName",
//                    birthDate: "@birthDate",
//                    creditLimit: "@creditLimit",
//                    phone: "@phone"
//                }
//            },
//            validationCard:{
//                url: $location.absUrl() + 'customer/validationCard',
//                method:'POST',
//                isArray: false,
//                headers: {'x-csrf-token' : $("#csrf").val() },
//                params: {
//                    cardNumber:"@cardNumber",
//                    tmpArr:"@tmpArr"
//                }
//            }
//        }
//    );
//
//    return Customer;
//}