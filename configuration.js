angular.module("ZapMedLav")
    .constant('configuration', {
        questionnaire_root: 'lib/questionnaires/',
        questionnaires_controller_url: 'http://wrkdev-mcrescini:8000/questionnaires/',
        questionnaire_templates_controller_url: 'http://wrkdev-mcrescini:8000/questionnaire_templates/',
        questionnaire_instances_controller_url: 'http://wrkdev-mcrescini:8000/exams/',
        zml_exams_controller_url: 'http://wrkdev-mcrescini:8000/zml_exams/'
    });