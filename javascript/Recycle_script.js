'use strict';

// Selecting elements
const collapseBar = document.querySelector('.navbar-toggler');
const collapseOptions = document.querySelector('.navbar-collapse');
const arr = ['paper', 'plastic', 'metal', 'glass', 'cloth', 'others'];
let showBar = true;

collapseBar.addEventListener('click', function(){
  if(showBar){
    collapseOptions.classList.remove('collapse');
    collapseOptions.classList.add('show');
    showBar = false;
  }
  else{
    collapseOptions.classList.remove('show');
    collapseOptions.classList.add('collapse');
    showBar = true;
  }

});