// ===== SLIDER =====
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

setInterval(()=>{
  moveSlide(1);
},2000);


// ===== CALCULATOR =====
function calculateCost(){
  let distance = parseFloat(document.getElementById("distance").value);
  let rate = parseFloat(document.getElementById("rate").value);

  if(isNaN(distance) || isNaN(rate)){
    document.getElementById("result").innerText = "Please enter valid numbers";
    return;
  }

  let total = distance * rate;
  document.getElementById("result").innerText =
    "Total Travel Cost: ₹ " + total;
}
