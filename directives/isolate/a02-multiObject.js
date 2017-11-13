var app = angular.module("myApp",[]);
		app.controller("myCtrl",function($scope){

			$scope.emp={
				empno : 1001,
				empname : 'ranjith'

			}
			$scope.emp2={
				empno : 1002,
				empname : 'Kumar'

			}

			$scope.mutiArrEmp=[{
				empno : 1001,
				empname : 'ranjith'

			},{
				empno : 1002,
				empname : 'kumar'

			},{
				empno : 1003,
				empname : 'gandhi'

			}];
			console.log($scope.mutiArrEmp);

		});
		app.directive("myDirective",function(){

			return {

				templateUrl : "info-msg-2-multiObject.html",
				scope : {
					ename : '@',
					empDetail:'='
				}


			};

		});
		app.directive("myDirective2",function(){

			return {

				templateUrl : "info-msg-2-multiObject2.html",
				scope : {
					ename : '@',
					empDetail:'@'
				},
				link : function(scope,element,attrs){
					 scope.emps = null
					 var empDetail = JSON.parse(scope.empDetail);
					 angular.forEach(empDetail,function(val,key){
					 	if(empDetail[key].empname==scope.ename){
					 		scope.emps = val;
					 	}

					 });
					 
					 console.log('link...');
					 
				},controller : function($scope,$element,$attrs){
					console.log('controller...');	
				}


			};

		});
		app.directive("myDirective3",function(){

			return {

				templateUrl : "info-msg-2-multiObject2.html",
				scope : {
					ename : '@',
					empDetail:'@'
				},
				controller : function($scope,$element,$attrs){
					$scope.emps = null;
					var empDetail = angular.fromJson($scope.empDetail);
					 angular.forEach(empDetail,function(val,key){
					 	if(empDetail[key].empname==$scope.ename){
					 		$scope.emps = val;
					 	}

					});
				}
				

			};

		});