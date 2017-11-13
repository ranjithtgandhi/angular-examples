
apps.controller('basic', ['$scope', 'mainservice','$mdDialog','$rootScope',
    function ($scope, mainservice,$mdDialog,$rootScope) {
      


        $rootScope.content = mainservice.get();

        //header data
        $scope.header = [{name: 'Firstname'}, {name: 'Lastname'}, {name: 'Age'}, {name: 'Employer'},
            {name: 'Joining Date'}, {name: 'Location'},{name:'Action'}];

 $scope.page = 1;
 
   
	
	$scope.pageChanged = function() {
	  var startPos = ($scope.page - 1) * 3;
	  //$scope.displayItems = $scope.totalItems.slice(startPos, startPos + 3);
	  console.log($scope.page);
	};
	
	function adduser($scope,$mdDialog){
		$scope.closeDialog = function() {
          $mdDialog.hide();
        }
		$scope.submituser = function(project){
			debugger;
			var obj = {};
			obj.firstName = $scope.firstname;
			obj.lastName = $scope.lastname;
			obj.age = $scope.age;
			obj.employer = $scope.employer;
			var date = new Date($scope.joiningDate);
			obj.joiningDate = date.getDate() + '-' + (date.getMonth() + 1) + '-' +  date.getFullYear();
			obj.location = $scope.location;
			$rootScope.content.push(obj);
			$rootScope.content.reverse();
			$mdDialog.hide();
			debugger;
		}
		
	}
	function edituser($scope,$mdDialog,dataToPass,index){
		$scope.closeDialog = function() {
          $mdDialog.hide();
        }
		var date1 = dataToPass.joiningDate;
		var date2 = date1.split("-");
		var date3 = new Date(date2["1"] + '/' + date2["0"] + '/' + date2["2"]);
		 debugger;
		 $scope.joiningdate = (date3.getMonth() + 1)+ '/' + date3.getDate()  + '/' +  date3.getFullYear();
		 $scope.firstName = dataToPass.firstName;
		 $scope.lastName = dataToPass.lastName;
		 $scope.age = dataToPass.age;
		 $scope.employer = dataToPass.employer;
		 $scope.location = dataToPass.location;
		 
		 $scope.index = index;
		 
		 $scope.updateuser = function(index){
			 debugger;
			 $rootScope.content[index].firstName = $scope.firstName;
			 $rootScope.content[index].lastName  = $scope.lastName;
			 $rootScope.content[index].age = $scope.age;
			$rootScope.content[index].employer =$scope.employer;
			var date = new Date($scope.joiningDate);
			$rootScope.content[index].joiningDate = date.getDate() + '-' + (date.getMonth() + 1) + '-' +  date.getFullYear();
			 $rootScope.content[index].location = $scope.location;
			$mdDialog.hide();
			 
		 }
	}
	
	$scope.Adduser = function(){
		  $mdDialog.show({
            controller: adduser,
            templateUrl: 'views/useradd.html',
            parent: angular.element(document.body),
            clickOutsideToClose: false,
            escapeToClose: false,
            fullscreen: $scope.customFullscreen,
        }).then(function (data) {

        }, function () {
        });
	}
	$scope.Edituser = function(data,ind){
		console.log(data);
		  $mdDialog.show({
            locals: {dataToPass:data,index:ind},
            controller: edituser,
            templateUrl: 'views/useredit.html',
            parent: angular.element(document.body),
            clickOutsideToClose: false,
            escapeToClose: false,
            fullscreen: $scope.customFullscreen,
        }).then(function (data) {

        }, function () {
        });
	}
	$scope.deleteuser = function(index){
		$rootScope.content.splice(index,1);
	}
}]);

apps.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9 .]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return '';
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

