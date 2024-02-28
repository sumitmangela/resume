
function onMenuClick(){
    var menu = document.getElementById('menu');
    var button = document.getElementById('menuButon');
    menu.classList.toggle('open');
    button.classList.toggle('fa-angles-down');
    button.classList.toggle('fa-angles-up');
}