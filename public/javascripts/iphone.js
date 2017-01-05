angular.module("myapp",[])
    .controller("phone",["$scope","$filter","$http",function($scope,$filter,$http){

        $http({url:"/ajax"}).then(function(data){
            //console.log(data.data);
            var data=data.data;
            var arr=[];
            for(var i=0;i<data.length;i++){
                var current=[];
                for(var j=0;j<data.length;j++){
                    if((data[i].en==data[j].en)&&!data[j].flag){
                        data[j].flag=true;
                        current.push(data[i]);
                        current.en=data[i].en;
                    }
                }
                if(current.length>0){
                    arr.push(current);
                    var newarr=$filter("orderBy")(arr,"en");
                }
                $scope.data=newarr;
            }
            $scope.filter=function(en){
                $scope.type=en;
            }
            $scope.show=function(){
                $scope.type="";
            }
        })
    }])