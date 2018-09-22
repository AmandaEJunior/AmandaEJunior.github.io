var indexsModulo = angular.module('indexModulo',[]);

indexsModulo.controller("indexController",function($scope, $http) {
    
//var urlPadrao = "http://54.39.84.221:8090";
var urlPadrao = "http://localhost:8080";
var listarTodos = "/present/listarTodos";
var infoDias = "/present/getDate";
$scope.infoDiasString = ""
    $scope.presentes = [];

    $http.get(urlPadrao+listarTodos).
        then(function(response) {
            console.log(response.data); 
            $scope.presentes = response.data;
    });
    

    $http.get(urlPadrao+infoDias).
        then(function(response) {
            console.log(response)
            $scope.infoDiasString = response.data.menssage
    });


});