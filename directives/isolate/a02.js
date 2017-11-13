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

		});
		app.directive("myDirective",function(){

			return {

				templateUrl : "info-msg-2.html",
				scope : {
					employee : '='
				}

			};

		});
		app.directive("myDirective2",function(){

			return {

				templateUrl : "info-msg-2.html",
				scope : {
					employee : '=objEmp'
				}

			};

		});