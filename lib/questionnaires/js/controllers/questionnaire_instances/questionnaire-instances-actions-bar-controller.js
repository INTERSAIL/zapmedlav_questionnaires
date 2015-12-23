angular.module('Questionnaire')
    .controller('QuestionnaireInstancesActionsBarController', ['$scope', 'QuestionnaireInstanceHelper', function($scope, QuestionnaireInstanceHelper) {

        // effettua una chiamata per caricare un questionario specifico dato il suo ID
        $scope.selectQuestionnaireInstance = function(questionnaireInstanceId) {
            QuestionnaireInstanceHelper.read(questionnaireInstanceId, {
                successFunction: function(data) {
                    $scope.questionnaireInstance = data;
                    $scope.errors = null;
                },
                errorFunction: function(data) {
                    $scope.questionnaireInstance = null;
                    $scope.errors = data;
                }
            });
        };

        // permette di modificare un questionario
        $scope.editQuestionnaireInstance = function() {
            $scope.editable = true;
        };

        // salva un questionario
        $scope.saveQuestionnaireInstance = function() {
            QuestionnaireInstanceHelper.save($scope.questionnaireInstance, {
                successFunction: function(data) {
                    //$scope.questionnaireInstance = data;
                    $scope.editable = false;
                    $scope.errors = null;
                    $scope.selectQuestionnaireInstance(data.id);
                },
                errorFunction: function(data) {
                    $scope.errors = data;
                }
            });
        };

        // annulla le modifiche fatte ad un questionario
        $scope.undoQuestionnaireInstance = function() {
            QuestionnaireInstanceHelper.cancel($scope.questionnaireInstance.id, {
                successFunction: function(data) {
                    $scope.editable = false;
                    $scope.errors = null;
                    $scope.selectQuestionnaireInstance($scope.questionnaireInstance.id);
                },
                errorFunction: function(data) {
                    $scope.errors = data;
                }
            });
        };

    }]);