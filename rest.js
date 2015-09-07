(function(){

  var rest = function(Restangular, localstorage){

    Restangular.setDefaultRequestParams({token: localstorage.get('token')});

    var authenticate= function(credentials){
        return Restangular.all('auth').post(credentials).then(function(response){
          return response;
        });
    };
    
    var authRequest = function(){
      return Restangular.all('auth').getList()
        .then(function(response){
          return response;
        });
    };

    return {
      authenticate: authenticate,
      authRequest: authRequest
    };

  };

  var module = angular.module('starter');
  module.factory('rest', rest);

}());
