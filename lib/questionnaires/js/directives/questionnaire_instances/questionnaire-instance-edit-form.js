angular.module("Questionnaire")
    .directive("questionnaireInstanceEditForm", function(configuration) {
        return {
            restrict: 'E',
            templateUrl: configuration.questionnaire_root + 'templates/pages/questionnaire_instances/questionnaire-instance-edit-form.html',
            scope: {
                questionnaireInstance: "=",
                editable: "=",
                errors: "=",
                questionnaireInstanceValid: "="
            },
            controller: 'QuestionnaireInstanceEditFormController',
            controllerAs: 'questionnaireCtrl',
            link: function(scope, element, attrs) {
                scope.editable = true;

                scope.$watch('frmQuestionnaire.$valid', function(validity) {
                    scope.questionnaireInstanceValid = validity;
                });
            }
        };
    });