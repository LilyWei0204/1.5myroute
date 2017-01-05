angular.module("myapp",["ngRoute","ngAnimate","ctrls","sevices"])
.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"1.html",
        controller:"index"
    }).when("/list/:id",{
            templateUrl:"list.html",
            controller:"list"
    }).when("/show/:id",{
        templateUrl:"show.html",
        controller:"list"
    }).otherwise("/");
})