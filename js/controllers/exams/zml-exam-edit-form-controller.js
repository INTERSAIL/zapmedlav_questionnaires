angular.module('ZapMedLav')
    .controller('ZmlExamEditFormController', ['$scope', '$routeParams', 'ZmlExamHelper', function($scope, $routeParams, ZmlExamHelper) {

        $scope.readExam = function() {
            var examId = $scope.getExamId();
            if (examId > 0) {
                // ho l'id dell'esame -> carico l'esame
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
            }
            else {
                // non ho l'id dell'esame -> se però ho i parametri workerId, examTypeId e medExamId, allora chiamo il new
                var workerId = $scope.getParam("workerId");
                var examTypeId = $scope.getParam("examTypeId");
                var medExamId = $scope.getParam("medExamId");
                if (workerId && examTypeId) {
                    ZmlExamHelper.new(workerId, examTypeId, medExamId, {
                        successFunction: function(data) {
                            $scope.exam = data;
                            $scope.errors = null;
                        },
                        errorFunction: function(data) {
                            $scope.exam = null;
                            $scope.errors = data;
                        }
                    });
                }
            }
        };

        // questo metodo serve ad ottenere l'id dell'esame da caricare. Se trovo il parametro "id" tramite la route, uso quello, altrimenti prelevo un eventuale parametro id specificato nella url (es. xxx.html?id=1)
        $scope.getExamId = function() {
            if ($routeParams.id)
                return $routeParams.id;
            else {
                return $scope.getParam("id");
            }
        };

        $scope.getParam = function(paramName) {
            var urlParameters = get_params(document.location.search);
            return urlParameters[paramName];
        }

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

        $scope.readExam();

    }]);