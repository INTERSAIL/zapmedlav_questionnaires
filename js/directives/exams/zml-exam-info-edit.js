angular.module("ZapMedLav")
    .directive("zmlExamInfoEdit", function(configuration) {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/exams/zml-exam-info-edit.html',
            scope: {
                exam: "=",
                editable: "=",
                errors: "=",
                examValid: "="
            },
            controller: 'ZmlExamInfoEditController',
            controllerAs: 'questionnaireCtrl',
            link: function(scope, element, attrs) {
//                scope.$watch(
//                    function(scope) {
//                        return scope.exam;
//                    },
//                    function(examNewValue, examOldValue) {
//                        if (examNewValue != null) {
//                            examNewValue.dateDate = new Date(examNewValue.date);
//                            scope.$watch(
//                                function (scope) {
//                                    return examNewValue.dateDate;
//                                },
//                                function (examDateNewValue, examDateOldValue) {
//                                    examNewValue.date = moment(examDateNewValue, "DD/MM/YYYY").format("DD/MM/YYYY HH");
//                                    alert((typeof examDateNewValue) + ':' + examDateNewValue + ' gregerger ' + examNewValue.date);
//                                }
//                            );
//                        }
//                    }
//                );
            }
        };
    });