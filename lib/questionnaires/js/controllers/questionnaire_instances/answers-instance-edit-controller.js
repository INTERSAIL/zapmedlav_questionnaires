angular.module('Questionnaire')
    .controller('AnswersInstanceEditController', ['$scope', function($scope) {

        // ritorna true se l'answer_type della domanda è uguale all'answer_type_id
        $scope.isAnswerTypeEqualTo = function(question_answer_type, answer_type_id) {
            return question_answer_type === answer_type_id;
        };

    }]);