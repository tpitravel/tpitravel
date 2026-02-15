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
function goState(state){
  window.location.href = "place.html?state=" + state;
}
function calculateCost(){
  let distance = document.getElementById("distance").value;
  let rate = document.getElementById("rate").value;

  if(distance === "" || rate === ""){
    document.getElementById("result").innerText = "Please enter both values";
    return;
  }

  let total = distance * rate;

  document.getElementById("result").innerText =
    "Total Travel Cost: ₹ " + total;
}
