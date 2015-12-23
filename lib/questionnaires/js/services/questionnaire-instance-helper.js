angular.module("Questionnaire")
    .factory('QuestionnaireInstanceHelper', ['$http', 'configuration', 'HttpHelper', function($http, configuration, HttpHelper){
        return {
            read: function(questionnaireInstanceId, handlers) {
                HttpHelper.http({ method: 'GET', url: configuration.questionnaire_instances_controller_url + questionnaireInstanceId.toString() }, handlers);
            },
            save: function(questionnaireInstance, handlers) {
                if (questionnaireInstance.id <= 0) {
                    // questionario nuovo: chiamo tramite POST
                    HttpHelper.http({ method: 'POST', url: configuration.questionnaire_instances_controller_url, headers: { 'Content-Type' : 'application/json; charset=UTF-8' }, data: questionnaireInstance }, handlers);
                }
                else {
                    // questionario già esistente: chiamo tramite PUT
                    HttpHelper.http({ method: 'PUT', url: configuration.questionnaire_instances_controller_url + questionnaireInstance.id.toString(), headers: { 'Content-Type' : 'application/json; charset=UTF-8' }, data: questionnaireInstance }, handlers);
                }
            },
            cancel: function(questionnaireInstanceId, handlers) {
                HttpHelper.http({ method: 'POST', url: configuration.questionnaire_instances_controller_url + questionnaireInstanceId.toString() + '/cancel' }, handlers);
            }
        };
    }]);