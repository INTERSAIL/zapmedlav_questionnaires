angular.module("Questionnaire")
    .directive("errorPanel", function(configuration) {
        return {
            restrict: 'E',
            templateUrl: configuration.questionnaire_root + 'templates/elements/error-panel.html',
            //templateUrl: 'templates/elements/error-panel.html',
            scope: {
                errors: "="
            },
            link: function(scope, element, attrs) {
                scope.$watch(
                    function(scope) {
                        return scope.errors
                    },
                    function(newValue, oldValue) {
                        var errorPanel = element.find("div.errors-panel").first();
                        var displayAttribute = errorPanel.css('display');
                        if (newValue && displayAttribute == 'none')
                            errorPanel.slideToggle();
                        else if (!newValue && displayAttribute == 'block')
                            errorPanel.slideToggle();
                    }
                );

                element.find("button.cancel-button").on('click', function() {
                    scope.$apply(function() { // per aggiornare l'interfaccia è necessario chiamare il $apply
                        scope.errors = null;
                    });

                });
            }
        };
    });