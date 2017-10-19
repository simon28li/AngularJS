//定义主页的控制器
m1.controller('studentCtrl',['$scope','$http',function($scope,$http){
	$scope.name = "lili";
	//获取学生信息
	$http.get('json/student.json').success(function(data){
		$scope.data = data;
		
	});
	
	
}]);