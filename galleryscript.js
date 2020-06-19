const showModal = (ev) =>{
    ev.preventDefault();
    
       let x = ev.pageX;
       let y = ev.pageY
     
    let modal = document.querySelector('.modal');
    modal.classList.remove('off');
    modal.classList.add('on'); 
    
    
    let origin = document.querySelector('.on');
    origin.style.transformOrigin= x + 'px ' + y + 'px ';
}

const hideModal = (ev) =>{
    let modal = document.querySelector('.modal');
    modal.classList.remove('on');
    modal.classList.add('off');
    
}

const showOverlay = (ev) =>{
    ev.preventDefault();
    

    let image = ev.target;
let source = image.getAttribute('src');
    let modal = document.querySelector('.modal');
    
    let newImg = document.createElement('img');
    newImg.setAttribute('src', source);
    newImg.style.height='100%';
    newImg.style.width= '100%';
    newImg.classList.add('modal-img');
    
    
    modal.appendChild(newImg);
    let overlay =document.querySelector('.overlay');
    overlay.classList.remove('hide');
    overlay.classList.add('show');
    showModal(ev);
};


const hideOverlay = (ev) =>{
    ev.preventDefault();
    ev.stopPropagation();
    
    let modal = document.querySelector('.modal');
    let image = modal.lastElementChild;
    modal.removeChild(image);

    
    let overlay=document.querySelector('.overlay')
    overlay.classList.remove('show');
    overlay.classList.add('hide');
    hideModal(ev);
}





const initialize = (ev)=>{
    
    let gridItem = document.querySelectorAll('.grid-item');
    
    gridItem.forEach(function(item, index, array){
        item.addEventListener('click', showOverlay);
    });
    
    let modal = document.querySelector('.modalbtn');
    modal.addEventListener('click', hideOverlay);
    
    let overlay = document.querySelector('.overlay');
    overlay.addEventListener('click', hideOverlay);
    
}


document.addEventListener('DOMContentLoaded', initialize);



// hamburger menu action===============//

const hamburger =document.querySelector(".hamburger")
const unordored = document.querySelector(".lu")
const hamLine = document.querySelectorAll('.line');
    
	hamburger.addEventListener("click", () =>{
		unordored.classList.toggle("open");
        
      for (i=0; i< hamLine.length; i++){
          hamLine[i].classList.toggle("border-linie");
      };
        
	});
