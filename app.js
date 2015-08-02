// app.js

(function() {

    'use strict';

    var app = angular.module('formlyApp', ['formly',
        'formlyBootstrap',
        'firebase',
        'formlyIonic',
        'pascalprecht.translate',
        'angularAwesomeSlider',
        'ngSanitize',
        'angularSpinner'
    ]);   

    //Custom templates configurationsS
    app.run(function(formlyConfig) {
        formlyConfig.setType({
            name: 'selectLanguage',
            templateUrl: 'custom-select-language.html',
        });
        formlyConfig.setType({
            name: 'selectEnclosure',
            templateUrl: 'custom-select-enclosure.html'

        });
        formlyConfig.setType({
            name: 'selectColors',
            templateUrl: 'custom-select-color.html'
        });
        formlyConfig.setType({
            name: 'rangeSlider',
            templateUrl: 'custom-select-rangeSlider.html',
            link: function(scope, el, attrs) {},
            controller: function($scope) {
                $scope.disable = function() {
                    $scope.disabled = !$scope.disabled;
                };
                $scope.value = "300;600";
                $scope.rangeOptions = {
                    from: 0,
                    to: 2000,
                    floor: true,
                    step: 1,
                    skin: 'plastic',                    
                    vertical: false,
                };
            },

        });

    });




    app.config(['$translateProvider', function($translateProvider) {
        $translateProvider.translations('en', {
            'WIDTH': 'Width:',
            'ENCLOSURE': 'Enclosure',
            'COLOR': 'Color:',
            'LANGUAGE': 'Language:',
            'ENGLISH': 'English',
            'DEUTSCH': 'German',
            'RED': 'Red',
            'GREEN': 'Green',
            'YELLOW': 'Yellow'
        });
        $translateProvider.translations('de', {
            'WIDTH': 'Breite:',
            'ENCLOSURE': 'Kapselung:',
            'COLOR': 'Farbe:',
            'LANGUAGE': 'Sprache:',
            'ENGLISH': 'Englisch',
            'DEUTSCH': 'Deutsch',
            'RED': 'Rot',
            'GREEN': 'Grun',
            'YELLOW': 'Gelb'
        });
        $translateProvider.preferredLanguage('de');
        $translateProvider.useSanitizeValueStrategy('sanitize');
    }]);

    app.config(function(formlyConfigProvider) {
        formlyConfigProvider.disableWarnings = true;
    });


    app.config(['usSpinnerConfigProvider', function (usSpinnerConfigProvider) {
    usSpinnerConfigProvider.setDefaults({color: '#0080FF'});
}]);




})();
