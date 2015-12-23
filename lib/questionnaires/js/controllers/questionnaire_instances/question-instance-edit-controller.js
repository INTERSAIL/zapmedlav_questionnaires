angular.module('Questionnaire')
    .controller('QuestionInstanceEditController', ['$scope', function($scope) {

        // questa proprietà è usata nella validazione sul numero di risposte selezionate. Se la tipologia della domanda è scelta singola o multipla e la risposta è obbligatoria BISOGNA
        // specificare almeno una risposta, quindi si può bindare un elemento ad esempio:
        // <input type="text" ng-model="questionnaireCtrl.dummyNoAnswers" ng-required="!isAnswerTypeEqualTo(question.answer_type, 0) && question.answers.length === 0" style="display:none;">
        // così da rendere la form non valida se non si selezionano risposte per quelle due categorie in caso di risposta obbligatoria
        $scope.dummyNoAnswers = null;

        // ritorna true se l'answer_type della domanda è uguale all'answer_type_id
        $scope.isAnswerTypeEqualTo = function(question_answer_type, answer_type_id) {
            return question_answer_type === answer_type_id;
        };

        // aggiungo un watch in modo tale che quando carico una domanda di tipo scelta singola, vado a settare la property "selectedAnswer" uguale alla position della risposta selezionata (default: 0)
        $scope.$watch(
            function(scope) {
                return scope.question;
            },
            function(newValue, oldValue) {
                if ($scope.isAnswerTypeEqualTo(newValue.answer_type, 2)) {
                    var selectedAnswer = null;
                    angular.forEach(newValue.answers, function (value, key) {
                        if (value.selected)
                            selectedAnswer = value;
                    });
                    if (selectedAnswer != null)
                        $scope.question.selectedAnswer = selectedAnswer.position;
                    else $scope.question.selectedAnswer = 0;
                }
                else if ($scope.isAnswerTypeEqualTo(newValue.answer_type, 1)) {
                    angular.forEach(newValue.answers, function (value, key) {
                        value.selected = value.selected;
                    });
                }
            }
        );

        // aggiungo un watch in modo tale che quando l'utente cambia il valore della property "selectedAnswer" della domanda (nel caso di scelta singola), viene settata la property "selected" di ciascuna risposta in modo appropriato
        $scope.$watch(
            function(scope) {
                return scope.question.selectedAnswer;
            },
            function(newValue, oldValue) {
                if ($scope.isAnswerTypeEqualTo($scope.question.answer_type, 2)) {
                    angular.forEach($scope.question.answers, function (value, key) {
                        value.selected = value.position === newValue;
                    });
                }
            }
        );

        $scope.getSelectedAnswers = function() {
            var count = 0;
            angular.forEach($scope.question.answers, function(value, key) {
                if (value.selected)
                    count++;
            });
            return count;
        };
    }]);