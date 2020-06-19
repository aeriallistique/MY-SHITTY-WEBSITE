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


// jump up to home ================//
    let icon=document.querySelector('.material-icons');
    
    icon.addEventListener('click', function(e){
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        }); 
    });

// jump from video link to video gallery==========//

const vid= document.querySelector('#video-link');

vid.addEventListener('click', function(){
   let h1Video = document.querySelector('#vid-h1').offsetTop;
  
    window.scrollTo({
       top:h1Video,
        left:0,
        behavior:'smooth'
    });
    
});


/*
const gallLink = document.querySelector('#gallerylink');
gallLink.addEventListener('click', function(){
    
    function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

let galleryH1 = document.querySelector('#carousel-h1');
let theTop = offset(galleryH1);
    
    window.scrollTo({
        top:theTop.top,
        left:0,
        behavior:'smooth'
    });
});

*/

// image carousel=============/


const imageSlider=document.querySelector('.image-slider');
const image=document.querySelectorAll('.image-slider img');

const prevbtn = document.querySelector('.prevbtn');
const nextbtn = document.querySelector('.nextbtn');

let counter= 1;
let size = image[0].offsetWidth;

imageSlider.style.transform='translateX(' + (-size * counter) + 'px)';

prevbtn.addEventListener('click', ()=>{
   if(counter <= 0)return;
    imageSlider.style.transition='transform .4s ease-in-out';
    counter--;
    imageSlider.style.transform='translateX(' + (-size * counter) + 'px)';
});

nextbtn.addEventListener('click', ()=>{
   if(counter >= image.length - 1)return;
    imageSlider.style.transition='transform .4s ease-in-out';
    counter++;
    imageSlider.style.transform='translateX(' + (-size * counter) + 'px)';
});

imageSlider.addEventListener('transitionend', ()=>{
   if(image[counter].id === 'last'){
       
       imageSlider.style.transition='none';
       counter= image.length -2;
       imageSlider.style.transform='translateX(' + (-size * counter) + 'px)';
   } 
    if( image[counter].id === 'first'){
        imageSlider.style.transition = 'none';
        counter= image.length - counter;
        imageSlider.style.transform='translateX(' + (-size * counter) + 'px)';
    }
});










