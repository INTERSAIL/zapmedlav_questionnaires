angular.module("Questionnaire")
    .config(['$routeProvider', 'configuration', function($routeProvider, configuration) {
        $routeProvider.when('/exams/:id', {
            templateUrl: configuration.questionnaire_root + 'templates/pages/exams/edit.html',
            controller: 'QuestionnaireInstancesController',
            controllerAs: 'questionnaireInstancesCtrl'
        })
        .otherwise({
            redirectTo: '/questionnaires_instances/0'
        })
    }]);