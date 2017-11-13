var app = angular.module("myApp",[]);
		app.controller("myCtrl",function($scope){

			$scope.a=10;
			$scope.b=20;

			$scope.doSum= function (x,y) {
				var sum  = parseInt(x) + parseInt(y);
				alert("sum = "+sum);
			}

		});
		/*app.directive("myDirective",function(){

			return {

				templateUrl : "info-msg-3.html",
				scope : {
					extSum : '&'
				}

			};

		});
		app.directive("myDirective2",function(){

			return {

				templateUrl : "info-msg-3a.html",
				scope : {
					extSum : '&'
				}

			};

		});*/
		app.directive("myDirective3",function(){

			return {

				templateUrl : "info-msg-3b.html",
				scope : {
					extSum : '&justSum'
				},
				controller : function($scope,$element,$attrs){
					$scope.doSum = function(){
						$scope.extSum({m: $scope.p, n: $scope.q});
					}
				}

			};

		});