angular.module('Questionnaire')
    .controller('QuestionnaireInstancesController', ['$scope', function($scope) {

        $scope.selectedQuestionnaireInstance = null;
        $scope.selectedQuestionnaireInstanceValid = false;
        $scope.isEdit = false;
        $scope.errors = null;

    }]);