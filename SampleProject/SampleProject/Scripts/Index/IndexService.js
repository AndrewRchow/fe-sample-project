(function () {
    'use strict';
    angular
        .module('mainApp')
        .factory('IndexService', IndexService);

    IndexService.$inject = ['$http', '$q'];

    function IndexService($http, $q) {
        var productInfo = [
            {
                "filename": "618328744.png",
                "price": 51.27,
                "name": "Mens Fashion Shirts",
                "filelocation": "/Images/618328744.png",
                "itemNumber" : 0
            },
            {
                "filename": "618842634.png",
                "price": 57.04,
                "name": "Casual jacket",
                "filelocation": "/Images/618842634.png",
                "itemNumber" : 1
            },
            {
                "filename": "619521178.png",
                "price": 3.97,
                "name": "Mens work shirt",
                "filelocation": "/Images/619521178.png",
                "itemNumber" : 2
            },
            {
                "filename": "623270836.png",
                "price": 32.37,
                "name": "Running Shoes",
                "filelocation": "/Images/623270836.png",
                "itemNumber" : 3
            },
            {
                "filename": "638571516.png",
                "price": 57.74,
                "name": "Leather lacket",
                "filelocation": "/Images/638571516.png",
                "itemNumber" : 4
            },
            {
                "filename": "649597850.png",
                "price": 87.45,
                "name": "Snow Boots",
                "filelocation": "/Images/649597850.png",
                "itemNumber" : 5
            },
            {
                "filename": "656678076.png",
                "price": 90.12,
                "name": "Mens Fashion Shirts",
                "filelocation": "/Images/656678076.png",
                "itemNumber" : 6
            },
            {
                "filename": "666666252.png",
                "price": 88.83,
                "name": "Womens white sweater",
                "filelocation": "/Images/666666252.png",
                "itemNumber" : 7
            },
            {
                "filename": "666666466.png",
                "price": 77.67,
                "name": "Womens red jacket",
                "filelocation": "/Images/666666466.png",
                "itemNumber" : 8
            },
            {
                "filename": "675606742.png",
                "price": 70.57,
                "name": "Pastel everyday wear",
                "filelocation": "/Images/675606742.png",
                "itemNumber" : 9
            },
            {
                "filename": "806813490.png",
                "price": 22.46,
                "name": "Longsleeve workout shirt",
                "filelocation": "/Images/806813490.png",
                "itemNumber" : 10
            }
        ]
        return {
            getProductInfo: function () {
                return productInfo;
            },
              setProductInfo: function (value) {
                productInfo=value;
            }
        };
    }
})();