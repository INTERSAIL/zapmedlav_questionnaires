angular.module("Questionnaire")
    .factory('PositionHelper', [function(){
        return {
            recalculatePositions: function(items){
                var count = 0;
                angular.forEach(items, function(value, key) {
                    value.position = count;
                    count = count + 1;
                });
            }
        };
    }]);