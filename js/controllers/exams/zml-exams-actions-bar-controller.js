angular.module('ZapMedLav')
    .controller('ZmlExamsActionsBarController', ['$scope', 'ZmlExamHelper', function($scope, ZmlExamHelper) {

        // effettua una chiamata per caricare un esame specifico dato il suo ID
        $scope.selectExam = function(examId) {
            ZmlExamHelper.read(examId, {
                successFunction: function(data) {
                    $scope.exam = data;
                    $scope.errors = null;
                },
                errorFunction: function(data) {
                    $scope.exam = null;
                    $scope.errors = data;
                }
            });
        };

        // permette di modificare un esame
        $scope.editExam = function() {
            $scope.editable = true;
        };

        // salva un esame
        $scope.saveExam = function() {
            ZmlExamHelper.save($scope.exam, {
                successFunction: function(data) {
                    $scope.editable = false;
                    $scope.errors = null;
                    $scope.selectExam(data.id);
                },
                errorFunction: function(data) {
                    $scope.errors = data;
                }
            });
        };

        // annulla le modifiche fatte ad un esame
        $scope.undoExam = function() {
            ZmlExamHelper.cancel($scope.exam, {
                successFunction: function(data) {
                    $scope.editable = false;
                    $scope.errors = null;
                    $scope.selectExam($scope.exam.id);
                },
                errorFunction: function(data) {
                    $scope.errors = data;
                }
            });
        };

    }]);