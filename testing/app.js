var apps = angular.module("basicapp", [
    'ngAnimate',
    'ui.router',
    'ngMaterial',
    'ui.bootstrap',
	
]);


apps.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.state('index',
            {
                url: '/index',
                templateUrl: 'views/index.html',
                controller: 'basic',
            });
    $urlRouterProvider.otherwise("/index");
	
});
apps.run(function () {

});
