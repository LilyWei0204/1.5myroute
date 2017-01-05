angular.module("sevices",[])
.factory("indexDate",function($http){
    /*$http({url:"1.txt"}).then(function(data){
        return data.data;
    })*/
    return $http({url:"1.txt"});
})
