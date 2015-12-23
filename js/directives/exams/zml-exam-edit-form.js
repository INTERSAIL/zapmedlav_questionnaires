angular.module("ZapMedLav")
    .directive("zmlExamEditForm", function(configuration) {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/exams/zml-exam-edit-form.html',
            scope: {
                exam: "=",
                editable: "=",
                errors: "=",
                examValid: "="
            },
            controller: 'ZmlExamEditFormController',
            controllerAs: 'questionnaireCtrl',
            link: function(scope, element, attrs) {
                scope.editable = true;

                scope.$watch('frmExam.$valid', function(validity) {
                    scope.examValid = validity;
                });
            }
        };
    });