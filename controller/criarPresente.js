var criarPresenteModulo = angular.module('criarPresenteModulo',[]);

criarPresenteModulo.controller("criarPresenteController",function($scope, $http) {
    
    var urlSalvarPresente = "http://54.39.84.221:8090/present/criarPresente";
    // var urlSalvarPresente = "http://localhost:8080/present/criarPresente";
        
    
    $scope.novoProduto = function() {      
        $http.post(urlSalvarPresente,$scope.produtoObject).
        then(function(response) {
            console.log(response.data); 
            $('#alert_placeholder').html('<div class="alert alert-success"><a class="close" data-dismiss="alert">×</a><span>'+response.data.menssage+'</span></div>');
        },function(response) { // optional
            // failed
            $('#alert_placeholder').html('<div class="alert alert-danger"><a class="close" data-dismiss="alert">×</a><span>'+response.data.menssage+'</span></div>');
            console.log(response.data); 
        });
    
    }
 });