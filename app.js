// app.js

(function() {

    'use strict';

    var app = angular.module('formlyApp', ['formly', 'formlyBootstrap', 'firebase', 'formlyIonic', 'pascalprecht.translate']);
    //var app = angular.module('formlyApp', ['pascalprecht.translate', 'formly', 'formlyBootstrap', 'firebase', 'formlyIonic']);
    //var app = angular.module('formlyApp', ['pascalprecht.translate', 'formly', 'firebase']);

    app.run(function(formlyConfig) {
        formlyConfig.setType({
            name: 'selectLanguage',
            templateUrl: 'custom-select-language.html'


        });
        formlyConfig.setType({
            name: 'selectEnclosure',
            templateUrl: 'custom-select-enclosure.html'

        });
        formlyConfig.setType({
            name: 'rangeSlider',
            templateUrl: 'custom-select-rangeSlider.html'

        });

    });

    app.config(function($translateProvider) {
        $translateProvider.translations('en', {
            'WIDTH': 'Width',
            'ENCLOSURE': 'Enclosure',
            'COLOR': 'Color',
            'LANGUAGE': 'Language',
            'ENGLISH': 'English',
            'DEUTSCH': 'German',
            'RED': 'Red',
            'GREEN': 'Green',
            'YELLOW': 'Yellow'
        });
        $translateProvider.translations('de', {
            'WIDTH': 'Breite',
            'ENCLOSURE': 'Kapselung',
            'COLOR': 'Farbe',
            'LANGUAGE': 'Sprache',
            'ENGLISH': 'English',
            'DEUTSCH': 'Deutsch',
            'RED': 'Rot',
            'GREEN': 'Grün',
            'YELLOW': 'Gelb'
        });
        $translateProvider.preferredLanguage('en');
    });




})();


angular.module('formlyApp').config(function(formlyConfigProvider) {
    formlyConfigProvider.disableWarnings = true;
});