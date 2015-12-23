angular.module("ZapMedLav")
    .directive("zmlExamsActionsBar", function(configuration, YesNoCancelDialog) {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/exams/zml-exams-actions-bar.html',
            scope: {
                exam: "=",
                editable: "=",
                errors: "=",
                examValid: "="
            },
            controller: 'ZmlExamsActionsBarController',
            controllerAs: 'questionnairesCtrl',
            link: function(scope, element, attrs) {
                element.on('click', 'button.action-bar-button', function() {
                    var button = this;

                    var message = "";
                    var requiresUserChoice = false;
                    var functionToExecute = null;

                    // in base all'azione, valorizzo alcuni parametri
                    if (button.classList.contains('edit-button'))
                        functionToExecute = function() { scope.editExam(); };
                    else if (button.classList.contains('cancel-button')) {
                        message = "Sei sicuro di voler annullare le modifiche?";
                        requiresUserChoice = true;
                        functionToExecute = function () { scope.undoExam(); };
                    }
                    else if (button.classList.contains('save-button'))
                        functionToExecute = function() { scope.saveExam(); };

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