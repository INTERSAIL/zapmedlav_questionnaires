angular.module("ZapMedLav")
    .directive("datepicker", function() {
        return {
            restrict: 'A',
            replace: true,
            link: function(scope, element, attrs) {
                scope.picker = new Pikaday({
                    field: element[0],
                    format: 'DD/MM/YYYY',
                    defaultDate: null,
                    setDefaultDate: true,
                    yearRange: [2000, new Date().getFullYear()],
                    i18n: {
                        previousMonth: 'Mese precedente',
                        nextMonth: 'Mese successivo',
                        months: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
                            'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
                        weekdays: ['Domenica', 'Luned&#236', 'Marted&#236', 'Mercoled&#236', 'Gioved&#236', 'Venerd&#236', 'Sabato'],
                        weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab']
                    }
                });

                scope.$watch(attrs.ngModel, function(v) {
                    var date = v ? new Date(v) : null;
                    if (!date || date.getFullYear() < 1850)
                        scope.picker.setDate(null);
                    else scope.picker.setDate(date);
                });
            }
        }
    }
)