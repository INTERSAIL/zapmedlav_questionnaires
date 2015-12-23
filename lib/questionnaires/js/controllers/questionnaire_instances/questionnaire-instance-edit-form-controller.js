angular.module('Questionnaire')
    .controller('QuestionnaireInstanceEditFormController', ['$scope', '$routeParams', 'QuestionnaireInstanceHelper', function($scope, $routeParams, QuestionnaireInstanceHelper) {

        $scope.readQuestionnaireInstance = function() {
            var questionnaireInstanceId = $scope.getQuestionnaireInstanceId();
            if (questionnaireInstanceId > 0) {
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
            }
        };

        // questo metodo serve ad ottenere l'id del questionario da caricare. Se trovo il parametro "id" tramite la route, uso quello, altrimenti prelevo un eventuale parametro id specificato nella url (es. xxx.html?id=1)
        $scope.getQuestionnaireInstanceId = function() {
            if ($routeParams.id)
                return $routeParams.id;
            else {
                var urlParameters = get_params(document.location.search);
                return urlParameters["id"];
            }
        };

        var get_params = function(search_string) {
            var parse = function(params, pairs) {
                var pair = pairs[0];
                var parts = pair.split('=');
                var key = decodeURIComponent(parts[0]);
                var value = decodeURIComponent(parts.slice(1).join('='));

                // Handle multiple parameters of the same name
                if (typeof params[key] === "undefined") {
                    params[key] = value;
                } else {
                    params[key] = [].concat(params[key], value);
                }
                return pairs.length == 1 ? params : parse(params, pairs.slice(1))
            }
            // Get rid of leading ?
            return search_string.length == 0 ? {} : parse({}, search_string.substr(1).split('&'));
        };

        $scope.readQuestionnaireInstance();

    }]);