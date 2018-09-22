var criarPresenteModulo = angular.module('criarPresenteModulo',[]);

criarPresenteModulo.controller("criarPresenteController",function($scope, $http) {
    
//var urlPadrao = "http://54.39.84.221:8090";
var urlSalvarPresente = "http://localhost:8080/present/criarPresente";
    

    $scope.novoProduto = function() {
        
        $http.post(urlSalvarPresente,$scope.produtoObject).
        then(function(response) {
            console.log(response.data); 
            limparCampos()
    });




    // $http({
    //     url: urlSalvarPresente,
    //     method: "POST",
    //     data: { '' : $scope.produtoObject }
    // })
    // .then(function(response) {
    //         // success
    //         console.log(response.data); 
    // }, 
    // function(response) { // optional
    //         // failed
    //         console.log(response.data); 
    // });
    }

    $scope.limparCampos = function () {
        $scope.produtoObject = "";
    }

});