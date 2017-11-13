var app = angular.module("myApp",[]);
		app.controller("myCtrl",function($scope){

			$scope.a=10;
			$scope.b=12;
			
			$scope.p=30;
			$scope.q=40;

		});
		app.directive("myDirective",function(){

			return {

				templateUrl : "info-msg.html",
				scope : {
					x : '@',
					y : '@'
				}

			};

		});
		app.directive("myDirective2",function(){

			return {

				templateUrl : "info-msg.html",
				scope : {
					x : '@m',
					y : '@n'
				}

			};

		});
		app.directive("myDirective3",function(){

			return {

				templateUrl : "info-msg.html",
				scope : {
					x : '@m',
					y : '@n'
				},
				controller : function($scope,$element,$attrs){
					$scope.doProcess = function(){
						var s = parseInt($scope.x) + parseInt($scope.y);
						alert('Sum = '+s);
					}
				}
				

			}

		});
		app.directive("myDirective4",function(){

			return {

				templateUrl : "info-msg.html",
				scope : {
					x : '@m',
					y : '@n'
				},
				link : function(scope,element,attrs){
					scope.doProcess = function(){
						var s = parseInt(scope.x) + parseInt(scope.y);
						alert('Sum = '+ s);
					}
				}

			}

		});