/***********************MENUBTN*****************/
var menubtn = document.getElementById('menubtn');
var menu = document.getElementsByClassName('menu')[0];

menubtn.onclick = toggleMenu;
function toggleMenu(){
menu.classList.toggle('opened');
}
/**********************PROGRESSBAR***********************/
var progressbar = document.getElementsByClassName('progressbar')[0];
var progress = document.getElementsByClassName('progress')[0];
var currentprogress = 0;
var value = progressbar.getAttribute('data-value');
var interval = setInterval(function(){
 animateProgress();
}, 20);
function animateProgress(){

	if(currentprogress <= value){
	 progress.style.width = currentprogress + '%';
	 currentprogress++;
	}
	else{
	 clearInterval(interval);
	}

}

