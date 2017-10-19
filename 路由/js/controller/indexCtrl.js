//定义主页的控制器
m1.controller('indexCtrl',['$scope','$location','$routeParams',function($scope,$location,$routeParams){
	$scope.name = "test";
	$scope.$location = $location;
	//console.log($routeParams);
	//$scope.num = $routeParams.num;
}]);