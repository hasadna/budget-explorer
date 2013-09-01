requirejs.config({
    // set '/lib' as base URL so all the project's paths needs to start with '../src/'
    // this will allow simpler integration later with the Open Budgets site
    baseUrl : '/lib',
    paths   : {
        api         : 'http://dev.openmuni.org.il/static/src/api',
        i18n        : 'http://dev.openmuni.org.il/static/src/i18n',
        dictionary  : '../src/dictionary'
    }
});
requirejs([
    'app' // name your app
], function (app) {

    // start doing stuff
});
