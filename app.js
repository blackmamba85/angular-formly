// app.js

(function() {

    'use strict';


    var app = angular.module('formlyApp', ['formly', 'formlyBootstrap', 'firebase', 'formlyIonic']);


  


})();


angular.module('formlyApp').config(function(formlyConfigProvider) {
    formlyConfigProvider.disableWarnings = true;
});
