angular.module('ZapMedLav')
    .directive('formatDateItalian', function ($filter) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attr, ngModel) {
                ngModel.$formatters.push(function(date) {
                    return $filter('date')(date, "dd/MM/yyyy");
                });
                ngModel.$parsers.push(function(date) {
                    if (date)
                    {
                        var dateTokens = date.split("/");
                        return new Date(dateTokens[2] + '-' + dateTokens[1] + '-' + dateTokens[0]).toISOString();
                    }
                    else return null;
                });
            }
        };
    });