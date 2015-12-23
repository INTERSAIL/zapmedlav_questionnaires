angular.module("ZapMedLav")
    .factory('ZmlExamHelper', ['$http', 'configuration', 'HttpHelper', function($http, configuration, HttpHelper){
        return {
            new: function(workerId, examTypeId, medExamId, handlers) {
                HttpHelper.http({ method: 'GET', url: configuration.zml_exams_controller_url + '/new?workerId=' + workerId.toString() + '&examTypeId=' + examTypeId.toString() + '&medExamId=' + medExamId.toString() }, handlers);
            },
            read: function(examId, handlers) {
                HttpHelper.http({ method: 'GET', url: configuration.zml_exams_controller_url + examId.toString() }, handlers);
            },
            save: function(exam, handlers) {
                if (exam.id > 0) {
                    // l'esame già esiste: chiamo tramite PUT
                    HttpHelper.http({ method: 'PUT', url: configuration.zml_exams_controller_url + exam.id.toString(), headers: { 'Content-Type': 'application/json; charset=UTF-8' }, data: exam }, handlers);
                }
                else {
                    // l'esame è nuovo: chiamo tramite POST
                    HttpHelper.http({ method: 'POST', url: configuration.zml_exams_controller_url, headers: { 'Content-Type': 'application/json; charset=UTF-8' }, data: exam }, handlers);
                }
            },
            cancel: function(exam, handlers) {
                HttpHelper.http({ method: 'POST', url: configuration.zml_exams_controller_url + exam.id.toString() + '/cancel', headers: { 'Content-Type': 'application/json; charset=UTF-8' }, data: exam }, handlers);
            }
        };
    }]);