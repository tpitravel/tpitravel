let index = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;

function showSlide(i){
  index = (i + totalSlides) % totalSlides;
  slides.style.transform = "translateX(" + (-index * 100) + "%)";
}

function moveSlide(step){
  showSlide(index + step);
}

function currentSlide(i){
  showSlide(i);
}

// Auto slide every 2 seconds
setInterval(()=>{
  moveSlide(1);
},2000);
