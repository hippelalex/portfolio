/***********************MENUBTN*****************/
var menubtn = document.getElementById('menubtn');
var menu = document.getElementsByClassName('menu')[0];

menubtn.onclick = toggleMenu;
function toggleMenu(){
menu.classList.toggle('opened');
}
/**********************PROGRESSBAR***********************/


let currentprogress = 0;
let i = 0;
while (i < document.getElementsByClassName('progressbar').length) {
    let progressbar = document.getElementsByClassName('progressbar')[i];
    console.log(progressbar);
    let progress = document.getElementsByClassName('progress')[i];
    let value = progressbar.getAttribute('data-value');
    let internal = setInterval(function () {
        animateProgress();}, 50);
    function animateProgress() {
        if (currentprogress <= value) {
            progress.style.width = currentprogress + '%';
            currentprogress++;
        }
        else {
            clearInterval(internal);
        }
    };
        i++;
    console.log(i);
};

// var currentprogress = 0;
// for (let i = 0; i < document.getElementsByClassName('progressbar').length; i++) {
//     let progressbar = document.getElementsByClassName('progressbar')[i];
//     console.log(progressbar)
//     let progress = document.getElementsByClassName('progress')[i];
//     let value = progressbar.getAttribute('data-value');
//
//     let internal = setInterval(function () {
//         animateProgress();}, 50);
//     function animateProgress() {
//         if (currentprogress < value) {
//             progress.style.width = currentprogress + '%';
//             currentprogress++;
//         }
//         else {
//             clearInterval(internal);
//         }
//     }
//
//     console.log(i);
// };




