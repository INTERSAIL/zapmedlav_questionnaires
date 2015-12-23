angular.module('ZapMedLav')
    .controller('ZmlExamsController', ['$scope', function($scope) {

        $scope.selectedExam = null;
        $scope.selectedExamValid = false;
        $scope.isEdit = false;
        $scope.errors = null;

    }]);