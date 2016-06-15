/**
 * Created by fran on 15/6/16.
 */
angular.module("whatapop").component("root",{

    $routeConfig: [{
        name: "Products",
        path: "/products",
        component: "products",
        useAsDefault: true
    }, {
        name: "NewProduct",
        path: "/products/new",
        component: "newProduct"
    }],
    templateUrl: "views/root.html"

});