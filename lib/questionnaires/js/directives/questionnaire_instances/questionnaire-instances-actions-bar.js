angular.module("Questionnaire")
    .directive("questionnaireInstancesActionsBar", function(configuration, YesNoCancelDialog) {
        return {
            restrict: 'E',
            templateUrl: configuration.questionnaire_root + 'templates/pages/questionnaire_instances/questionnaire-instances-actions-bar.html',
            scope: {
                questionnaireInstance: "=",
                editable: "=",
                errors: "=",
                questionnaireInstanceValid: "="
            },
            controller: 'QuestionnaireInstancesActionsBarController',
            controllerAs: 'questionnairesCtrl',
            link: function(scope, element, attrs) {
                element.on('click', 'button.action-bar-button', function() {
                    var button = this;

                    var message = "";
                    var requiresUserChoice = false;
                    var functionToExecute = null;

                    // in base all'azione, valorizzo alcuni parametri
                    if (button.classList.contains('edit-button'))
                        functionToExecute = function() { scope.editQuestionnaireInstance(); };
                    else if (button.classList.contains('cancel-button')) {
                        message = "Sei sicuro di voler annullare le modifiche?";
                        requiresUserChoice = true;
                        functionToExecute = function () { scope.undoQuestionnaireInstance(); };
                    }
                    else if (button.classList.contains('save-button'))
                        functionToExecute = function() { scope.saveQuestionnaireInstance(); };

                    // creo l'oggetto necessario al YesNoCancelDialog
                    var yncHandlers = {
                        // la yesFunction esegue l'azione relativa al pulsante premuto
                        "yesFunction" : function() {
                            scope.$apply(function() { // per aggiornare l'interfaccia è necessario chiamare il $apply
                                functionToExecute();
                            });
                        },
                        "noFunction": function() {},
                        "cancelFunction": function() {}
                    };
                    // se richiede una decisione dell'utente, mostro il dialog, altrimenti chiamo subito la yesFunction
                    if (requiresUserChoice)
                        YesNoCancelDialog.openDialog(message, yncHandlers);
                    else yncHandlers.yesFunction();
                });
            }
        };
    });