window.onload = function(){
    var submit = document.querySelector('input[type="submit"]');

    var stage = document.querySelector('input[value="stage"]');
    var project = document.querySelector('input[value="project"]');
    //submit.onclick = function keuzeStage() {

    stage.onclick = function rolStageFormulierUit() {
        document.querySelector('form > fieldset:nth-of-type(3)').style.display = 'none';
        document.querySelector('form > fieldset:nth-of-type(4)').style.display = 'block';
    }

    project.onclick = function rolProjectFormulierUit() {
        document.querySelector('form > fieldset:nth-of-type(3)').style.display = 'block';
        document.querySelector('form > fieldset:nth-of-type(4)').style.display = 'none';
    }
}

