/*
 添加一页需要做：
 1、在index.html文件中添加以下链接
 <a href="" ng-click="$location.path('*****')">*****</a>
 2、需要更改路由的配置表信息
 .when('/student',{
		templateUrl:'page/studentPage.html',//定义模板
		controller:'studentCtrl'//定义控制器
	})
 3.新建 对应的html页面  和  控制器的js文件
 4.将控制器文件引入到index.html文件中
 * */

m1.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/index',{
		templateUrl:'page/indexPage.html',//定义模板
		controller:'indexCtrl'//定义控制器
	})
	.when('/student',{
		templateUrl:'page/studentPage.html',//定义模板
		controller:'studentCtrl'//定义控制器
	})
	.otherwise({//可以进行重定向  ，一般重定向到主页或登录页注册页
		//重定向的优势： 首先 ，首页自动显示了，其次，如果url地址出错  或者找不到会自动定位到首页
		redirectTo:'/index'
	});
	
}]);
			