angular.module("Questionnaire")
    .factory('OperationInProgressPanel', [function() {

        return {
            showGrayedLayout: function () {
                $("body").append('<div id="operazioneInCorso" class="operation_in_progress_panel"><div style="height:40%;"></div><div class="operation_in_progress_panel_text">OPERAZIONE IN CORSO....<br>ATTENDERE</div></div>');
            },
            hideGrayedLayout: function () {
                $("body #operazioneInCorso").remove();
            }
        };
    }]);