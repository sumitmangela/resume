
function onMenuClick(){
    var menu = document.getElementById('menu');
    var button = document.getElementById('menuButon');
    menu.classList.toggle('open');
    button.classList.toggle('fa-angles-down');
    button.classList.toggle('fa-angles-up');
}

function onModeToggle(){
    var body = document.querySelector('body');
    body.classList.toggle('dark-mode');
}