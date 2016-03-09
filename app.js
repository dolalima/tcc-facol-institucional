/**
 * Created by Dola on 07/03/2016.
 */
if (Meteor.isClient) {
    var app = angular.module('app', ['angular-meteor', 'ngRoute']);
    app.config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'page/home.html'
                })
                .when('/home', {
                    templateUrl: 'page/home.html'
                })
                .when('/equipe', {
                    templateUrl: 'page/equipe.html'
                })
                .when('/projetos', {
                    templateUrl: 'page/projetos.html'
                })
                .when('/contato', {
                    templateUrl: 'page/contato.html'
                })
                .otherwise('/');
        }
    );

    app.controller('MainController', function ($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    });
}