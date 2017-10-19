var m1 = angular.module('module1',[]);
//创建自定义服务
m1.factory('myService',function(){
	return{
		name:'hello',
		show:function(){
			return this.name +'angular';
		}
	}
});