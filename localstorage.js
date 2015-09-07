(function(){
  var localstorage = function($window){

    var set = function(key, value){
      $window.localStorage[key] = value;
    }

    var setObject = function(key, value){
      $window.localStorage[key] = JSON.stringify(value);
    } 

    var get = function(key, defaultValue){
      return $window.localStorage[key] || defaultValue;
    }

    var getObject = function(key){
      return JSON.parse($window.localStorage[key] || '{}');
    }

    return {
      set: set,
      setObject: setObject,
      get: get,
      getObject: getObject
    };
  };

  var module = angular.module('starter');
  module.factory('localstorage', localstorage);
}());
