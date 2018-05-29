/***********************MENUBTN*****************/
var menubtn = document.getElementById('menubtn');
var menu = document.getElementsByClassName('menu')[0];

menubtn.onclick = toggleMenu;
function toggleMenu(){
menu.classList.toggle('opened');
}
/**********************PROGRESSBAR***********************/
// [].forEach.call(document.getElementsByTagName(progressbar), function(el) {
//     console.log(el);
// });
var progressbar  = document.getElementsByClassName('progressbar')[0];
var progress  = document.getElementsByClassName('progress')[0];
var currentProgress = 0;
var value = progressbar.getAttribute('data-value');
var interval = setInterval(function(){
    animateProgress();
},20);
function animateProgress(){

    if (currentProgress <= value){
        progress.style.width = currentProgress + '%';
         currentProgress++;
    }
    else{
        clearInterval(interval);
    }

}



var progressbars = document.getElementsByClassName('progressbar');
console.log(progressbars);



