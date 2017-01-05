angular.module("ctrls",["sevices"])
.controller("index",["$scope","$http","indexDate",function($scope,$http,indexDate){
    indexDate.then(function(data){
        $scope.data=data.data;
    })
}]).controller("list",function($scope,$routeParams){
    //$scope.id=$routeParams.id;
}).controller("show",function(){

})

