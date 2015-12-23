angular.module("Questionnaire")
    .directive("actionsBarButton", function(configuration) {
        return {
            restrict: 'E',
            templateUrl: configuration.questionnaire_root + 'templates/elements/actions-bar-button.html',
            scope: {
                imageClass: "@",
                tooltip: "@",
                visible: "=",
                enabled: "="
            },
            link: function(scope, element, attrs) {
                element.find("button.action-bar-button").addClass(scope.imageClass);
            }
        };
    });