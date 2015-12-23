angular.module("Questionnaire")
    .directive("questionnaireInstanceEdit", function(configuration) {
        return {
            restrict: 'E',
            templateUrl: configuration.questionnaire_root + 'templates/pages/questionnaire_instances/questionnaire-instance-edit.html',
            scope: {
                questionnaireInstance: "=",
                editable: "=",
                errors: "=",
                questionnaireInstanceValid: "="
            },
            controller: 'QuestionnaireInstanceEditController',
            controllerAs: 'questionnaireCtrl',
            link: function(scope, element, attrs) {

            }
        };
    });