'use strict';

// Selecting elements
const collapseBar = document.querySelector('.navbar-toggler');
const collapseOptions = document.querySelector('.navbar-collapse');
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

// Changing colour on selection of Recycle Items
const arr = ['papers', 'plastic', 'metal', 'glass', 'cloth', 'others'];
const flagRecycleItems = [0, 0, 0, 0, 0, 0];

//iterate through each class and add Event listener

for(let i = 0; i < arr.length; i++){
  let recycleItem = document.querySelector(`.${arr[i]}`);
  let imageElement = document.querySelector(`.${arr[i]}-img`);

  recycleItem.addEventListener('click', function()
  {
    if(!flagRecycleItems[i])
    {
      recycleItem.style.backgroundColor = "#81A969";
      imageElement.src = `images/${arr[i]}_dark.png`;
      flagRecycleItems[i] = 1;
    }
    else if(flagRecycleItems[i])
    {
      recycleItem.style.backgroundColor = "#ffffff";
      imageElement.src = `images/${arr[i]}_light.png`;
      flagRecycleItems[i] = 0;
    }

  });
}

export {flagRecycleItems, arr};