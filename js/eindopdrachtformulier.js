var menuIcon = document.querySelector("#menu-icon");
var menuList = document.querySelector("#menu-list");
menuList.classList.add("is-hidden");

menuIcon.onclick = function (e) {
    e.preventDefault();
    menuList.classList.toggle('is-hidden');
}

window.onload = function() {
    var stage = document.querySelector('input[value="stage"]');
    var project = document.querySelector('input[value="project"]');

    stage.onclick = function rolStageFormulierUit() {
        document.querySelector('form > fieldset:nth-of-type(3)').style.display = 'none';
        document.querySelector('form > fieldset:nth-of-type(4)').style.display = 'block';
    }

    project.onclick = function rolProjectFormulierUit() {
        document.querySelector('form > fieldset:nth-of-type(3)').style.display = 'block';
        document.querySelector('form > fieldset:nth-of-type(4)').style.display = 'none';
    }
}
