angular.module("Questionnaire")
    .factory('HttpHelper', ['$http', 'OperationInProgressPanel', function($http, OperationInProgressPanel){
        return {
            http: function(httpParameters, handlers) {
                OperationInProgressPanel.showGrayedLayout();
                $http(httpParameters)
                    .success(function(data, status, headers, config) {
                        OperationInProgressPanel.hideGrayedLayout();
                        if (handlers && handlers.hasOwnProperty('successFunction'))
                            handlers.successFunction(data);
                    })
                    .error(function(data, status, headers, config) {
                        OperationInProgressPanel.hideGrayedLayout();
                        if (handlers && handlers.hasOwnProperty('errorFunction'))
                            handlers.errorFunction(data);
                    });
            }
        };
    }]);