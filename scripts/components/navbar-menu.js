/**
 * Created by fran on 15/6/16.
 */

angular.module("whatapop").component("navbarMenu",{


        bindings: {
            $router: "<"
        },
        templateUrl: "views/navbar-menu.html",
        controller : function (ProductService) {

            var self = this;

            self.tabs = [{
                title: "Products",
                url: "Products"
            }, {
                title: "New Product",
                url: "NewProduct"
            }];

            self.search = function (text) {

                ProductService.search(text);

            }


        }



});