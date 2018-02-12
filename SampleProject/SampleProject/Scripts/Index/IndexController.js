(function () {
    "use strict";
    angular
        .module("mainApp")
        .controller("IndexController", IndexController);

    IndexController.$inject = ["IndexService"];

    function IndexController(IndexService) {
        var vm = this;
        vm.$onInit = _init;
        vm.IndexService = IndexService;
        vm.productInfo = [];
        vm.productList = [];
        vm.cartCount = 0;
        vm.cartItems = [];
        vm.cartTotalPrice = 0;

        vm.sizeFourChunks = _sizeFourChunks;
        vm.addToCart = _addToCart;
        vm.removeItem = _removeItem;

        function _init() {
            //Retrieve products array from service
            console.log(vm.IndexService.getProductInfo());
            vm.productInfo = vm.IndexService.getProductInfo();
            vm.productList = vm.sizeFourChunks(vm.productInfo);
        }

        function _sizeFourChunks(data) {
            //Splits array to be easier displayed in rows of 4
            var chunksize = 4;
            var chunks = [];
            data.forEach((item) => {
                if (!chunks.length || chunks[chunks.length - 1].length == chunksize)
                    chunks.push([]);
                chunks[chunks.length - 1].push(item);
            });
            return chunks
        }

        function _addToCart(e) {
            //Checks if item has already been clicked
            if ($(e.target).closest(".clothingItem").hasClass("clicked")) {
                vm.cartCount--;
                $(e.target).closest(".clothingItem").removeClass("clicked");
                //Finds the item number, then removes that item from cart
                var itemNumber = $(e.target).next("input").val();
                for (var i = 0; i < vm.cartItems.length; i++) {
                    if (vm.cartItems[i].itemNumber == itemNumber) {
                        vm.cartTotalPrice -= vm.cartItems[i].price;
                        vm.cartItems.splice(i, 1);
                        break
                    }
                }
                //Rounds total to two decimals, included becuase of bug causing long decimals
                vm.cartTotalPrice = Math.round(vm.cartTotalPrice * 100) / 100;
            }
            else {
                //If item hasn't been clicked, adds item to cart
                vm.cartCount++;
                $(e.target).closest(".clothingItem").addClass("clicked");
                var itemNumber = $(e.target).next("input").val();
                vm.cartItems.push(vm.productInfo[itemNumber]);
                vm.cartTotalPrice += vm.productInfo[itemNumber].price;
                vm.cartTotalPrice = Math.round(vm.cartTotalPrice * 100) / 100;
            }
        }

        function _removeItem(e) {
            //For "x" button in cart modal
            vm.cartCount--;
            var itemNumber = $(e.target).next("input").val();
            $(e.target).closest(".row").remove();
            //Removes item from cart
            for (var i = 0; i < vm.cartItems.length; i++) {
                if (vm.cartItems[i].itemNumber == itemNumber) {
                    vm.cartTotalPrice -= vm.cartItems[i].price;
                    vm.cartItems.splice(i, 1);
                    break
                }
            }
            //Removes "clicked" status on main page of specified item
            $(".clothingItem input:eq(" + itemNumber + ")").closest(".clicked").removeClass("clicked");
            vm.cartTotalPrice = Math.round(vm.cartTotalPrice * 100) / 100;
        }
    }
})();