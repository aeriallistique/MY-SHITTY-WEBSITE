

const hamburger =document.querySelector(".hamburger")
const unordored = document.querySelector(".lu")
const hamLine = document.querySelectorAll('.line');


//making the 'go up' button apear and dissapear
let options = {
    root: null,
    rootMargin: '-250px 0px',
    threshold: 0.5
  }
  
  let observer = new IntersectionObserver(makeArrowVisible, options);
    const carousel = document.getElementById('img-carousel');
    observer.observe(carousel);
    
    function makeArrowVisible(entries){
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const arrow = document.getElementById('arrow');
                arrow.classList.toggle('display-on')
            }
        })
    }

    // jump up to home ================//
    let icon=document.querySelector('.material-icons');
    
    icon.addEventListener('click', function(e){
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        }); 
    });
    
// hamburger menu action===============//
	hamburger.addEventListener("click", () =>{
		unordored.classList.toggle("open");
        
      for (i=0; i< hamLine.length; i++){
          hamLine[i].classList.toggle("border-linie");
      };
        
	});

// jump from video link to video gallery==========//

const vid= document.querySelector('#video-link');

vid.addEventListener('click', function(){
   let h1Video = document.querySelector('#vid-h1').offsetTop;
  
    window.scrollTo({
       top:h1Video -50,
        left:0,
        behavior:'smooth'
    });
    
});

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









